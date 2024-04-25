import '@/components/banner.style.css'

export const Banner = ({ bannerClass, bannerTitle }) => {

    return (
        <div className={bannerClass}>
            {bannerTitle ? <h1>{bannerTitle}</h1> : ''}            
        </div>
    )
}