const Contacts = () => (
  <section id="contacts" className="gggyrate border-y border-neutral-800 p-v p-h">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-stretch md:items-start gap-6 xl:gap-8 w-full">
        <h2 className="text-3xl lg:text-5xl 2xl:text-6xl">Давайте <span className="underline underline-offset-4 decoration-emerald-600">сотрудничать</span></h2>
        <p className="text-base 2xl:text-xl">
          Отправьте сообщение через форму или свяжитесь со мной напрямую через способы, указанные ниже.
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-start items-stretch md:items-center gap-3 2xl:gap-6">
          <a className="flex justify-center items-center gap-2 btn border-2 border-emerald-600 text-neutral-100 fill-neutral-100 w-auto" href="mailto:aliiev.akhtem@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
            aliiev.akhtem@gmail.com
          </a>
          <a className="flex justify-center items-center gap-2 btn border-2 border-emerald-600 btext-neutral-100 fill-neutral-100 w-auto" href="tel:+380636092209">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path></svg>
            +380 63 609 2209
          </a>
          <a className="flex justify-center items-center gap-2 btn border-2 border-emerald-600 text-neutral-100 fill-neutral-100 w-auto" href="https://t.me/aliiev_akhtem" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
            t.me/aliiev.akhtem
          </a>
        </div>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full md:w-2/3 p-6">
        <h4 className="text-xl lg:text-3xl">Напишите мне</h4>
        <p className="text-sm md:text-base mt-1 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo earum in impedit doloribus corrupti sed quia labore porro? Natus, sequi earum deleniti enim animi. Maxime dolore voluptate animi laborum!
        </p>
        <form className="flex flex-col justify-between items-stretch gap-4">
          <input className="input" type="text" placeholder="Ваше имя" />
          <input className="input" type="email" placeholder="Ваш email" />
          <textarea className="input resize-none" placeholder="Ваше сообщение"></textarea>
          <input className="input-file" type="file" placeholder="Ваш email" />
          <button className="btn bg-emerald-600 disabled:cursor-not-allowed" disabled>Отправить</button>
        </form>
      </div>
    </div>
  </section>
)

export default Contacts