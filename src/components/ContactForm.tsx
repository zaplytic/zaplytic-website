export default function ContactForm() {
    return (
        <>
            <div id="contact-us" className="w-4/5 mx-auto my-2">
                <h2 className="font-bold fs--xl">Contact Us</h2>
                <div className="w-[clamp(25rem,_12.3254rem_+_42.1607vw,_45rem)] mx-auto p-8 m-4 bg-gray-800 rounded">
                    <input type="text" className="p-1 border-1 border-gray-100 rounded" placeholder="Name: Jahid Himon"></input> &nbsp;
                    <input type="email" className="p-1 border-1 border-gray-100 rounded" placeholder="jahidhimon@google.com"></input>  &nbsp;
                    <input type="mobile" className="p-1 border-1 border-gray-100 rounded tb:mt-2" placeholder="+88017xxxxxxxx"></input> <br/> <br/>
                    <textarea rows={3} cols={50} className="p-1 border-1 border-gray-100 rounded" placeholder="Any feedback or query will be appreciable."></textarea> <br/>
                    <input type="button" className="mt-4 cursor-pointer bg-sky-500 hover:bg-sky-700 font-bold p-1 rounded" value={"Submit"}></input>
                </div>
            </div> 
        </>
    );
}