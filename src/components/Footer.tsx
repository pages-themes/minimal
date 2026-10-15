const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {YEAR} Charlie Cameron</span>
        <span>
          Built with React · <a href="https://github.com/Cgyc20/cgyc20.github.io">source</a>
        </span>
      </div>
    </footer>
  );
}
