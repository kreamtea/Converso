import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>
        Popular Companions
      </h1>

      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura Explorer"
          topic="Neural Networks of the Brain"
          subject = "Science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCard 
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject = "Maths"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard 
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject = "English Litrature"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessions}
          classNames = "w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page