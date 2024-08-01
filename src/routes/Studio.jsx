import { Link } from "react-router-dom";
import { BiBookmarkAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { storiesAction } from "../store/Stories";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";


const StudioSection=()=>{


    const stories=useSelector((store)=>store.stories);
    

    const handleAddStory=()=>{
        console.log("add Story clicked");
    }

    const influencersPic=useSelector((store)=>store.influencersPic);
    




    return <>
    <div className="studioSection">
    <div className="container-md">
    <div className="headerSec">
        <div className="firstStHalf">
            <Link><FaArrowLeft size={23}/>  </Link>
            <Link>Studio</Link>
        </div>
        <div className="nav_bar2">
            <Link to="/studio"><BiBookmarkAlt size={23}/></Link>
            <Link to="/studio"><IoSettingsOutline size={23}/></Link>
            <Link to="/studio"><IoMdSearch size={23} /></Link>
        </div>
    </div>

    
<div className="studioMessage">
       Check on what are they using...
    </div>

    <div className="stories">
    <div className="circle circle2" onClick={handleAddStory}>
          <IoIosAddCircleOutline size={30}/>
            <p className="addStory">Add Story</p>
   </div>

   {
    stories.map((item)=>
        <div className="circle" key={item.id} >
            <img src={item.image}/>
            <div className="label">{item.type}</div>
        </div>
    )
   }
    </div>


    <div className="influencersMessage">
        Follow Our Top Influencers...
    </div>

    <div className="influencers">
    <div className="influencersPicContainer">


        {
            influencersPic.map((item)=>
                <div className="picContainer">
                <img src={item.image} alt="" />
               <center>
               <p id="nameOfPic">{item.name}</p>
               <p id="picType">{item.type}</p>
               </center>
                </div>
            )
        }   
    </div>
    </div>

    <div className="gap">

    </div>
    <div className="post">
        <div className="headerOfPost">
            <p className="postimage">
                <img src="/images/2.jpg" className="profileImage" alt="" />
                {/* image.. */}
            </p>
            
            <div className="nameDiv">
            <div className="accountName">
                Kaira k

                </div>
            <div className="addedDate">
                3 days ago
            </div>
           
            </div>
            <div className="dot"> 
           < GoDotFill size={15}/>
            </div>
            <div className="followButton">
                Follow
            </div>         
        </div>
        <div className="actualPostImage">
            <img src="/images/4.jpg"  alt="" />
        </div>
    </div>
    <div className="gap">
        <p>This is niranjan alase and gonna </p>
    </div>
    <div className="post">
        
    </div>
    <div className="post">
        
    </div>
    <div className="post">
        
    </div>
    


    </div>
    </div>
    </>

}

export default StudioSection;