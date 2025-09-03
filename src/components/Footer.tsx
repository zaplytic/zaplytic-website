import Links from "./Links";

export default function Footer() {
  return (
    <>
      <div className="absolute -bottom-64 left-0 bg-gray-800 w-full px-4 py-2">
        <div className="grid grid-cols-2 justify-items-center">
          <div className="w-[clamp(12rem,_7.5639rem_+_14.7563vw,_19rem)]">
            <h4 className="font-bold fs--lg">Zaplytic</h4>
            <p className="text-justify">A SaaS Product based company, also build open source project for contributing tech community and experiment for quality productions.</p>
          </div>
          <div className="w-[clamp(12rem,_7.5639rem_+_14.7563vw,_19rem)]">
            <h4 className="font-bold fs--lg">Our Address</h4>
            <p>
              123 ABC, South Mirpur, Dhaka - 1216. <br/>
              Helpline: +1xxxx, Mobile: +88015xxxxxxxx <br />
              Email: contact@zaplytic.org
            </p>
          </div>
        </div>
        <hr className="my-2 opacity-50"/>
        <div className="grid grid-cols-2 fs--sm items-center">
          <span>&#169; Zaplytic 2025<sup>&#174;</sup>. All Rights Reserved.</span>
          <Links />
        </div>
      </div>
    </>
  );
}
