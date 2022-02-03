import Link from "next/link";
function Footer() {
  return (
    <footer className="my-5 py-5 bg-black text-center rounded-md">
      <p className="text-white text-lg font-light">
        @2021 All right are reserved. Designed By{" "}
        <Link href="https://shresthapradhuman.com.np">
          <a target={"_blank"} rel="noopener" className=" text-orange-400">Shrestha Pradhuman</a>
        </Link>
      </p>
    </footer>
  );
}
export default Footer;
