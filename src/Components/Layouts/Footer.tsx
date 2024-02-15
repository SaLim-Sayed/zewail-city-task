export default function Footer() {
  return (
    <div className=" sticky bottom-0 w-full h-12 bg-white flex justify-center items-center texxt-2xl  font-[500] ">
      <div className=" ">
        {" "}
        All Copyrights reserved &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}
