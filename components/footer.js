import Link from "next/link";
function Footer() {
  return (
    <footer>
      <p>
        @2021 All right are reserved. Designed By{" "}
        <Link href="https://shresthapradhuman.com.np">
          <a target={"_blank"}>Shrestha Pradhuman</a>
        </Link>
      </p>
    </footer>
  );
}
export default Footer;
