
import ContactForm from '@/components/Pages/Contact/ContactForm'
import ContactUsHero from '@/components/Pages/Contact/ContactUsHero'
import React from 'react'

const ContactUsPage = () => {
  return (
    <section>
        <ContactUsHero />
        <div className="pt-[36px] ">
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactUsPage