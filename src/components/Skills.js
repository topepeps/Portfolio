import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import adobe from "../assets/skills/adobe.png"
import c from "../assets/skills/c.png"
import sketchup from "../assets/skills/sketchup.png"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"


import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Sketch Up" experience="1 years" img={sketchup} />
                <SkillCard name="c++" experience="1 years" img={c} />
                <SkillCard name="python" experience="1 years" img={python} />
                <SkillCard name="adobe" experience="1 years" img={adobe} />
                <SkillCard name="react" experience="Beginner" img={reactIcon} />
              
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}