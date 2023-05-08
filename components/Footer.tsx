const Footer: React.FC = () => {
    return (
      <footer className="text-center py-4 mt-8 border-t">
        <p>
          Developed by{' '}
          <a href="https://github.com/jedpattersonn" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            Jed Patterson
          </a>
        </p>
        <p>
          Soure Code:{' '}
          <a href="https://github.com/JedPattersonn/fifa-random-positions" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            GitHub
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;