
const Footer = () => {
  return (
    <footer className="bg-android-dark-green text-white text-center py-4 mt-8">
      <div className="container mx-auto max-w-4xl">
        <p className="text-sm">
          Site criado como exercício do{" "}
          <a 
            href="https://www.cursoemvideo.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-android-green transition-colors underline"
          >
            Curso em Vídeo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
