

export default function Contacts() {

    return (
        <>
        <div>
          <h2 className="text-2xl">
            # Contacts
          </h2>
          <ol className="list-disc list-inside ">
              <li className={`my-1`}>E-mail: <a className={`text-blue-500 underline`} href="mailto:hayatemario46@gmail.com">hayatemario46@gmail.com</a></li>
              <li className={`my-1`}>Twitter: <a className={`text-blue-500 underline`} href="https://twitter.com/Hayatann256">@Hayatann256</a></li>
              <li className={`my-1`}>Discord: Hayatann#8373</li>
          </ol>
        </div>
        </>
    )
}