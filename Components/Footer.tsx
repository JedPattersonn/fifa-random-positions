const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 mt-8 border-t">
      <p>
        Developed by{" "}
        <a
          href="https://jedpatterson.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Jed Patterson
        </a>{" "}
        &{" "}
        <a
          href="https://sidekicksoftware.co"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Side Kick Software
        </a>
      </p>
    </footer>
  );
};

export default Footer;
