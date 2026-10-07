function Footer({ owner }) {
  return (
    <>
      <hr />
      <footer className="footer">
        <p>&copy; {owner}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
