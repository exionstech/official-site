import { cn } from "@/lib/utils"


const logos = [
    {
      name: 'XCONICS',
      url: '/logo/xconics.svg',
      size: 'w-26 md:w-27 h-auto',
    },
    {
      name: 'EDPL',
      url: '/logo/edpl.svg',
      size: 'w-18 md:w-24',
    },
    {
      name: 'Praxis',
      url: '/logo/praxis.svg',
      size: 'w-36',
    },
    {
      name: 'Seed',
      url: '/logo/seed.svg',
      size: 'w-28 md:w-32',
    },
    {
      name: 'Sync',
      url: '/logo/sync.svg',
      size: 'w-28 md:w-32',
    }
  ]
  
  const WorkedWith = () => {
    return (
      <div className="w-full">
        <div className="mx-auto w-full">
          <div
            className="group relative mt-1 flex gap-4 md:gap-10 overflow-hidden p-1 md:p-2"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <img
                      key={key}
                      src={logo.url}
                      className={cn("px-2", logo.size)}
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default WorkedWith