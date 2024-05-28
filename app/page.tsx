

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi! My name is Soorya Sundravel. I am a Computer Science major from the University of Minnesota. I am passionate about leveraging data and AI to build software applications that help people's lives.
        With a strong foundation in programming and problem-solving, I thrive on tackling complex challenges and turning innovative ideas into reality.`}
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Verizon</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Software Engineer Intern
      </p>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Accenture</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Data Analyst Intern
      </p>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">AP Stamp</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Data Engineering Intern
      </p>
    </section>
  )
}
