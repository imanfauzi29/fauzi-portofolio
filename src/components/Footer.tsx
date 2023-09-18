const Footer = () => {
    const yearNow = () => {
        const date = new Date()
        return date.getFullYear()
    }
  return (
    <>
      <div className="flex items-center justify-center w-full h-10 p-8 text-sm text-gray-600 bg-gray-100">
        Copyright &copy; {yearNow()} &nbsp; <a href="https://linkedin.com/imanfauzi29" className="hover:underline"> Iman Fauzi</a> &nbsp; - Portofolio
      </div>
    </>
  );
};

export default Footer;
