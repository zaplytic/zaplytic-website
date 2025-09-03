export default function About() {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <h2 className="font-bold fs--xl my-4">About Zaplytic</h2>
        <div>
          Zaplytic, a team of few passionate developers building open-source tools
          and SaaS products to empower developers, businesses, and everyday users.
          Our mission is to create high-quality, easy-to-use software that solves
          real-world problems. We believe in the power of open-source and
          community collaboration.
          <h5 className="py-2 font-bold">We Build</h5>
          <ul className="pl-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg> &nbsp;
              <p>
                Open-Source Tools: open-source tools to help developers be more productive and efficient.
              </p>
            </li>
            <li  className="py-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg> &nbsp;
              <p>
                SaaS Products: innovative SaaS products for businesses and individuals.
              </p>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
}
