export default function Services() {
    return (
        <>
            <div id="services" className="my-4 w-4/5 mx-auto p-4 grid grid-cols-2 bg-gray-800 rounded">
                <div className="mx-4 w-4/5 h-full border-1 border-solid border-gray-100 rounded justify-self-center"></div>
                <div className="w-4/5">
                    <h4 className="font-bold fs--lg">Our Services</h4>
                    <p>We provide digital products and solutions for businesses and institutions for enhancing their workflow.</p>
                    <ul className="my-2">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="brown" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline size-6">
                                <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg> &nbsp;
                            Open-Source Tools
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline size-6">
                                <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg> &nbsp;
                            SaaS Products
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}