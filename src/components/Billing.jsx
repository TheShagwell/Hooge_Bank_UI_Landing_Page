import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"


const Billing = () => (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} xs:leading-[56px]`}>Easily control your <br className="sm:block hidden"/> billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorem, soluta quos dignissimos inventore omnis minima aperiam dolores molestiae sint.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" alt="apple_store" />
          <img src={google} className="w-[128px] h-[42px] object-contain cursor-pointer" alt="google_store" />
        </div>
      </div>
    </section>
  )

export default Billing