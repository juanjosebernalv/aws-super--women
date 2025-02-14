"use client";
import TimeLineElement from 'app/components/TimeLineElement';
import Image from "next/image";
import { FaWpforms } from "react-icons/fa";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineAddAlert } from "react-icons/md";

export default function Home() {
  return (

    <>




      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/images/aws-womern.jpeg"
          alt="Next.js logo"
          width={250}
          height={250}
          priority
        />
        <h1 className="text-4xl font-bold">AWS Women Colombia User Group - Challenge AI Practitioner</h1>
        <h2 className="text-2xl font-bold">¡Bienvenida al Challenge AI Practitioner!</h2>
        <h6>¡Bienvenida al Challenge Episodio IV: AI Practitioner – Una Nueva Era! 🌟</h6>
        <p className=''>AWS Women Colombia User Group te invita a formar parte de este emocionante reto diseñado para ayudarte a certificarte como AWS Certified AI Practitioner. Aquí encontrarás todo lo que necesitas saber para inscribirte y participar con éxito.</p>
        <VerticalTimeline>

        <TimeLineElement title="Registrate en nuestro grupo de Meetup" event="13 Febrero de 2025" icon={<FaWpforms className="text-2xl"/>} link="https://www.meetup.com/es/aws-women-colombia-user-group/" timeIcon={<FaWpforms />} linkText="Únete aquí" step="1. Inscribete"/>
        <TimeLineElement title="Apuntate a todos los eventos del Challenge AI Practitioner en Meetup (los eventos se publicarán semanalmente)." event="13 Febrero de 2025" icon={<MdOutlineAddAlert className="text-2xl"/>} link="https://docs.google.com/forms/d/e/1FAIpQLSeCicravZhbCQX5wPP8QEMSNoAPRCHWIzdYp0OmfInv_i5HcA/viewform?fbzx=-2212347641289066054" timeIcon={<MdOutlineAddAlert />} linkText="Enterate aquí" step="2. Mantente al tanto"/>
      </VerticalTimeline>
          {/* <Image
          className="dark:invert"
          src="/images/aws-womern.jpeg"
          alt="Next.js logo"
          width={250}
          height={250}
          priority
        />
        <ol className="list-inside list-decimal text-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 ">
            <div className='flex gap-2 items-center'>
              Registrarte en nuestro grupo de Meetup:.
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                <a href='https://www.meetup.com/es/aws-women-colombia-user-group/' target='_blank' className='flex gap-4 items-center' >
                  Únete aquí <BsWhatsapp />
                </a>
              </code>
              .
            </div>
          </li>
          <li>Apuntarte a todos los eventos del Challenge AI Practitioner en Meetup (los eventos se publicarán semanalmente).</li>
          <li>
            Completar el formulario de inscripción.
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeCicravZhbCQX5wPP8QEMSNoAPRCHWIzdYp0OmfInv_i5HcA/viewform' target='_blank'>
                Completalo aquí
              </a>
            </code>
          </li>
          <li>
            Unirte a nuestro grupo de WhatsApp:
            <a href='https://chat.whatsapp.com/GBIrjtzS9KVA9DOSyhc42f' target='_blank'>
              <BsWhatsapp />
            </a>
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">

            </code>

          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-96">
          {/* <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a> */}
          <Image
          src="/images/women.png"
          alt="Next.js logo"
          width={500}
          height={500}
          priority
        />
        </footer>
      </div>
    </>
  );
}
