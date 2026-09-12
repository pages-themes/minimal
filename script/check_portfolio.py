"""Check the static portfolio's local links without third-party dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.refs = []
        self.projects = []
        self.templates = set()
        self.template_depth = 0
        self.errors = []

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if tag == 'template':
            self.template_depth += 1
            self.templates.add(data.get('id'))
        if data.get('id') and not self.template_depth:
            if data['id'] in self.ids:
                self.errors.append('Duplicate document id: ' + data['id'])
            self.ids.add(data['id'])
        for attribute in ('href', 'src'):
            if data.get(attribute):
                self.refs.append(data[attribute])
        if data.get('data-project'):
            self.projects.append(data['data-project'])

    def handle_endtag(self, tag):
        if tag == 'template':
            self.template_depth -= 1

page = Page()
page.feed((ROOT / 'index.html').read_text())
errors = page.errors
for ref in page.refs:
    url = urlsplit(ref)
    if url.scheme or url.netloc:
        continue
    if not url.path and url.fragment and url.fragment not in page.ids:
        errors.append('Missing anchor: ' + ref)
    if url.path and not (ROOT / unquote(url.path)).is_file():
        errors.append('Missing local asset: ' + ref)
for css in (ROOT / 'assets/css').glob('portfolio.css'):
    for ref in re.findall(r'url\([\'"]?([^\'"\)]+)', css.read_text()):
        if not urlsplit(ref).scheme and not (css.parent / ref).is_file():
            errors.append('Missing CSS asset: ' + ref)
for name in page.projects:
    if 'project-' + name not in page.templates:
        errors.append('Missing project template: ' + name)
if not (ROOT / '.nojekyll').is_file():
    errors.append('Missing .nojekyll')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'OK: {len(page.refs)} references, {len(page.ids)} document IDs, {len(page.projects)} project templates, CSS assets, and static entry files.')
