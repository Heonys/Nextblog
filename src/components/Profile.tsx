import Image from "next/image";
import Link from "next/link";
import ProfileOmage from "../../public/images/Luffy.png";

const Profile = () => {
  return (
    <div className="text-center">
      <Image
        className="mx-auto rounded-full"
        width={250}
        height={250}
        src={ProfileOmage}
        alt="Luffy"
        priority
      ></Image>

      <h2 className="mt-2 text-3xl font-bold">Jiheon Kim</h2>
      <h3 className="text-xl font-semibold"> FrontEnd Developer </h3>
      <p> 누군가는 해야하잖아 </p>
      <Link href="/contact">
        <button className="mt-2 rounded-xl bg-yellow-500 px-4 py-1">contacts</button>
      </Link>
    </div>
  );
};

export default Profile;
