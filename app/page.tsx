import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import { currentUser } from '@clerk/nextjs/server'


const Page = async () => {
  const companions = await getAllCompanions({limit: 3});
  const user = await currentUser();
  const recentSessionCompanions = await getRecentSessions(10);

   const usingPopularCompanionsDummy = companions.length === 0;
   const displayedPopularCompanions =
    usingPopularCompanionsDummy ? recentSessions.slice(0, 3) : companions;

  const usingRecentSessionsDummy = recentSessionCompanions.length === 0;
  const displayedRecentSessions =
    usingRecentSessionsDummy ? recentSessions : recentSessionCompanions;
  
  const redirectToNewPageOnClick = usingPopularCompanionsDummy || usingRecentSessionsDummy;

  return (
    <main>
      <h1>
        Popular Companions
      </h1>

      <section className='home-section'>
        {displayedPopularCompanions.map((companion) => (
          
          <CompanionCard 
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            redirectToNewPageOnClick={redirectToNewPageOnClick}
          />
        ))}

      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recently completed sessions"
          companions={displayedRecentSessions}
          classNames = "w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page