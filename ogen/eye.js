//#region IMPORTS
import "./joystick.js"
//#endregion IMPORTS

const template = document.createElement("template")
template.innerHTML = /*html*/`

    <style>
        #container{
            display: flex;
        }
        #leftControl, #rightControl{
            display: block;
        }
        #eyesContainer{
            width: 60%;
            height: 500px;
            margin: auto;
            border: solid black 2px;
        }
        #eyesContainer svg{
            height: 100%;
            display: block;
            margin: auto;
            
        }
        .lid { animation: blink 2.7s infinite; }

        .eye { animation: squeeze 2.7s infinite; }

        @keyframes blink {
            90% {
            transform: none;
            animation-timing-function: ease-in;
            }
            93% {
            transform: translateY(3000px) scaleY(0.1)
            }
            100% {
            animation-timing-function: ease-out;
            }
        }

        @keyframes squeeze {
            90% {
            transform: none;
            animation-timing-function: ease-in;
            }
            93% {
            transform: translateY(680px) scaleY(0.8)
            }
            100% {
            animation-timing-function: ease-out;
            }

        }
    </style>


    <div id="container">
        <div id="leftControl">
            <joystick-comp id="leftEye" x="" y=""></joystick-comp>
            <joystick-comp id="leftEyeFull" x="" y=""></joystick-comp>
        </div>
        <div id="eyesContainer">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="450 2500 1300 1000">
                <!-- style="enable-background:new 0 0 4500 4000;" xml:space="preserve" -->

                <style type="text/css">
                    .st0 {
                        fill: url(#SVGID_1_);
                    }

                    .st1 {
                        fill: url(#SVGID_2_);
                    }

                    .st2 {
                        fill: url(#SVGID_3_);
                    }

                    .st3 {
                        fill: #FFFFFF;
                    }

                    .st4 {
                        fill: url(#SVGID_4_);
                    }

                    .st5 {
                        fill: url(#SVGID_5_);
                    }

                    .st6 {
                        fill: url(#SVGID_6_);
                    }
                </style>

                <!-- <g id="background">
            </g> -->

                <!-- <g id="Art_Work"> -->
                <g id="I_L" class="eye" transform="translate(0,-10)">
                    <g id="Ir_L" transform="rotate(-8,820,3410)">
                        <g> <!-- wit + rand -->
                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="641.6958" y1="3119.6733" x2="1062.3857"
                                y2="3119.6733">
                                <stop offset="0" style="stop-color:#F2F2F2" />
                                <stop offset="0.3398" style="stop-color:#F0F0F0" />
                                <stop offset="0.5115" style="stop-color:#E8E8E8" />
                                <stop offset="0.6456" style="stop-color:#DBDBDB" />
                                <stop offset="0.7601" style="stop-color:#C8C8C8" />
                                <stop offset="0.8622" style="stop-color:#B0B0B0" />
                                <stop offset="0.954" style="stop-color:#929292" />
                                <stop offset="1" style="stop-color:#808080" />
                            </linearGradient>

                            <!-- eye white L -->
                            <path class="st0" d="M1053.8,3160.6c-32.7,161.4-149.5,273.9-261,251.3c-111.4-22.6-175.3-171.7-142.6-333.1
                                c32.7-161.4,149.5-273.9,261-251.3S1086.5,2999.2,1053.8,3160.6z" />

                            <!-- eye border L -->
                            <path d="M1055.3,3160.9l-2.8,12.2l-0.7,3l-0.8,3l-1.6,6c-0.5,2-1.1,4-1.6,6l-1.8,6c-1.2,4-2.3,8-3.7,11.9l-2,5.9
                                c-0.7,2-1.3,4-2,5.9l-4.4,11.7l-4.7,11.6c-0.8,1.9-1.7,3.8-2.5,5.7l-2.6,5.7c-7,15.2-14.8,30-23.6,44.2
                                c-8.8,14.2-18.5,27.9-29.4,40.8c-10.8,12.9-22.8,24.9-35.9,35.6c-13.1,10.7-27.4,20.2-42.7,27.7c-15.4,7.5-31.9,13.2-49,15.8
                                c-17.1,2.7-34.8,2.5-52.1-0.6c-17.2-3.3-33.8-9.7-48.9-18.5c-15.2-8.7-28.7-20.1-40.6-32.8c-11.9-12.7-22-26.9-30.6-41.9
                                c-8.6-15-15.6-30.8-21.3-47c-11.3-32.5-17.2-66.6-18.9-100.7l-0.3-6.4c-0.1-2.1-0.2-4.3-0.2-6.4l0-12.8l0.4-12.8
                                c0-2.1,0.2-4.3,0.4-6.4l0.4-6.4c1.3-17,3.6-34,6.7-50.8c3.3-16.8,7.4-33.4,12.6-49.7l2-6.1c0.7-2,1.3-4.1,2-6.1l4.3-12.1l4.8-12
                                c0.8-2,1.7-4,2.5-5.9l2.6-5.9c14.2-31.3,32.3-61.2,55-87.7c11.4-13.2,24-25.5,37.8-36.5c13.9-11,29-20.6,45.3-28.1
                                c16.3-7.5,33.8-13.1,52-15.4l6.8-0.8l1.7-0.2l1.7-0.1l3.4-0.2c2.3-0.1,4.6-0.2,6.9-0.3l6.9,0.2l3.4,0.1c1.1,0,2.3,0.2,3.4,0.3
                                l6.9,0.7c2.3,0.2,4.5,0.7,6.8,1l6.8,1.2l6.7,1.7c2.2,0.6,4.5,1.1,6.6,1.9l6.5,2.2c1.1,0.4,2.2,0.7,3.2,1.2l3.2,1.3l6.3,2.7
                                c2.1,1,4.1,2.1,6.1,3.1l3,1.6l1.5,0.8l1.5,0.9l5.8,3.5c15.4,9.6,28.9,21.8,40.3,35.3c11.5,13.5,21,28.4,28.8,43.9
                                c7.8,15.5,13.8,31.7,18.5,48.1c4.7,16.4,8,33.2,10.1,49.9c2.2,16.8,3.2,33.6,3.3,50.4l0,6.3c0,2.1,0,4.2-0.1,6.3l-0.4,12.6
                                l-0.9,12.5c-0.1,2.1-0.4,4.2-0.6,6.3l-0.6,6.2c-0.3,4.2-1,8.3-1.5,12.5l-0.8,6.2l-1,6.2l-1,6.2l-0.5,3.1l-0.6,3.1L1055.3,3160.9
                                z M1052.4,3160.3l2.1-12.3l0.5-3.1l0.4-3.1l0.8-6.2c0.3-2.1,0.6-4.1,0.8-6.2l0.6-6.2c0.4-4.1,0.8-8.2,1-12.4
                                c0.2-4.1,0.5-8.3,0.6-12.4l0.2-12.4l-0.3-12.4c0-2.1-0.2-4.1-0.3-6.2l-0.4-6.2c-1.2-16.4-3.6-32.8-7.1-48.8
                                c-3.5-16-8.3-31.7-14.2-46.8c-5.9-15.1-13.1-29.6-21.5-43.1c-8.4-13.5-18.1-26.1-29-37.2c-10.9-11.1-23-20.7-36.3-28.1l-5-2.7
                                l-1.2-0.7l-1.3-0.6l-2.6-1.2c-1.7-0.8-3.4-1.6-5.1-2.3l-5.3-2l-2.6-1c-0.9-0.4-1.8-0.6-2.7-0.8l-5.4-1.6
                                c-1.8-0.6-3.6-0.9-5.4-1.3l-5.5-1.2c-14.7-2.7-29.7-2.9-44.5-0.7c-14.8,2.1-29.4,6.8-43.2,13.1c-13.9,6.4-27.1,14.6-39.5,24
                                c-12.4,9.5-24,20.2-34.6,31.9c-21.4,23.4-39,50.4-53.2,79.3c-14.2,28.8-24.4,59.8-31.3,91.3c-3.3,15.8-5.8,31.9-7.3,48l-0.5,6
                                c-0.2,2-0.4,4-0.5,6l-0.6,12.1l-0.2,12.1c-0.1,2,0,4,0,6.1l0.1,6.1c0.9,32.3,5.9,64.6,15.8,95.2c4.9,15.3,11.1,30.2,18.7,44.3
                                c7.6,14.1,16.6,27.3,27.2,39.2c10.5,11.9,22.5,22.4,36,30.6c13.4,8.2,28.2,14.3,43.6,17.7c15.4,3.3,31.4,3.9,47.2,2.1
                                c15.8-1.8,31.4-6.3,46.2-12.8c14.8-6.4,28.9-14.7,42-24.5c13.1-9.7,25.3-20.8,36.6-32.8c11.2-12.1,21.4-25.1,30.6-38.9
                                c9.2-13.8,17.4-28.2,24.5-43.1l2.6-5.6c0.9-1.9,1.8-3.7,2.6-5.7l4.8-11.5l4.4-11.6c1.5-3.9,2.7-7.8,4-11.8
                                c1.4-3.9,2.5-7.9,3.6-11.9l1.8-6c0.6-2,1-4,1.5-6l1.5-6l0.8-3l0.7-3L1052.4,3160.3z" />
                        </g>
                    
                        <radialGradient id="SVGID_2_" cx="839.239" cy="3141.4373" r="159.8052" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style="stop-color:#FFFFFF" />
                            <stop offset="0.3513" style="stop-color:#FDFEFE" />
                            <stop offset="0.5288" style="stop-color:#F5FAFA" />
                            <stop offset="0.6674" style="stop-color:#E8F2F4" />
                            <stop offset="0.7858" style="stop-color:#D5E8EB" />
                            <stop offset="0.8913" style="stop-color:#BDDBE0" />
                            <stop offset="0.9863" style="stop-color:#9FCBD2" />
                            <stop offset="1" style="stop-color:#9AC8D0" />
                        </radialGradient>

                        <g class="lid">
                        <!-- eye blue L -->
                        <path id="blue_L" class="st1" d="M971.5,3165.3c-17.8,98.7-91.4,168.1-164.5,155c-73-13.2-117.8-103.9-100-202.6s91.4-168.1,164.5-155C944.5,2975.8,989.3,3066.5,971.5,3165.3z" />
                        
                        <radialGradient id="SVGID_3_" cx="837.7084" cy="3135.7969" r="81.4286" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style="stop-color:#4D4D4D" />
                            <stop offset="0.3785" style="stop-color:#4B4B4B" />
                            <stop offset="0.5698" style="stop-color:#434343" />
                            <stop offset="0.719" style="stop-color:#363636" />
                            <stop offset="0.8466" style="stop-color:#232323" />
                            <stop offset="0.9592" style="stop-color:#0B0B0B" />
                            <stop offset="1" style="stop-color:#000000" />
                        </radialGradient>

                        <!-- pupil L -->
                        <path id="pupil_L" class="st2" d="M905.9,3148.1c9.1-50-14.1-96-51.8-102.8c-37.7-6.8-75.5,28.2-84.6,78.1s14.1,96,51.8,102.8C859,3233.1,896.8,3198.1,905.9,3148.1z" />
                        

                        <!-- circle highlight L -->
                        <ellipse id="highlight_L" class="st3" cx="792.3"
                            cy="3087.9" rx="31.3" ry="31.3" />
                        </g>
                        <!-- wimper mid links -->
                        <path d="M697.1,2980.1c0,0-110.2,7.5-117.8-115.3c0,0-36.3,125.3,96.5,147.8L697.1,2980.1z" />
                        <!-- <path opacity=".5" fill="red" transform="translate(-10)" d="M707.1,2980.1c0,0-110.2,7.5-117.8-115.3c0,0-36.3,125.3,96.5,147.8L707.1,2980.1z"/> -->

                        <!-- wimper laag links -->
                        <path d="M670.8,3016.5c0,0,-100.2,17.5,-135.3,-40.1c0,0,31.3,85.2,135.3,55.1V3016.5z" />

                        <!-- wimper hoog links -->
                        <path d="M720,2937.5c0,0 -82.7,-58.9 -65.1,-157.8 c0,0-78.9,115.3,48.9,175.4L720,2937.5z" />

                        

                        <!-- brow L -->
                        <path id="brow_L"
                            d="M748.4,2725.8c0,0,147.8-154.1,279.4-7.5l0,0c10.4-19.2,7.1-42.9-8-58.6C969.1,2607.1,848.4,2518.2,748.4,2725.8z" />

                        <!-- highlight ellipse L -->
                        <ellipse class="st3" cx="862.1" cy="3064.9" rx="22.7" ry="8.5" />
                        
                    </g>
                        <!-- eye bag L-->
                        <path d="M672,3444.9c0,0,176.6-117.8,309.4-6.3C981.4,3438.6,773.5,3403.5,672,3444.9z" />
                    </g>
                    <g id="I_R" class="eye">
                    <g id="Ir_R" transform="rotate(8,1390,3400)">
                        <g> <!-- wit + rand R -->
                            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="3786.4717" y1="3102.136" x2="4207.1616"
                                y2="3102.136" gradientTransform="matrix(-1 0 0 1 5338.894 0)">
                                <stop offset="0" style="stop-color:#F2F2F2" />
                                <stop offset="0.3398" style="stop-color:#F0F0F0" />
                                <stop offset="0.5115" style="stop-color:#E8E8E8" />
                                <stop offset="0.6456" style="stop-color:#DBDBDB" />
                                <stop offset="0.7601" style="stop-color:#C8C8C8" />
                                <stop offset="0.8622" style="stop-color:#B0B0B0" />
                                <stop offset="0.954" style="stop-color:#929292" />
                                <stop offset="1" style="stop-color:#808080" />
                            </linearGradient>

                            <!-- eye white R -->
                            <path class="st4" d="M1140.3,3143c32.7,161.4,149.5,273.9,261,251.3c111.4-22.6,175.3-171.7,142.6-333.1
                            c-32.7-161.4-149.5-273.9-261-251.3C1171.4,2832.5,1107.6,2981.6,1140.3,3143z" />

                            <!-- eye border R -->
                            <path d="M1141.8,3142.7l2.6,12.2l0.7,3l0.8,3l1.5,6c0.5,2,1,4,1.5,6l1.8,6c1.2,4,2.3,8,3.6,11.9c1.3,3.9,2.5,7.9,4,11.8
                            l4.4,11.6l4.8,11.5c0.8,1.9,1.7,3.8,2.6,5.7l2.6,5.6c7.2,14.9,15.4,29.4,24.5,43.1c9.2,13.7,19.4,26.8,30.6,38.9
                            c11.2,12,23.4,23.1,36.6,32.8c13.1,9.7,27.2,18,42,24.5c14.8,6.4,30.4,11,46.2,12.8c15.8,1.9,31.8,1.2,47.2-2.1
                            c15.4-3.4,30.1-9.5,43.6-17.7c13.5-8.2,25.5-18.7,36-30.6c10.5-11.9,19.6-25.1,27.2-39.2c7.6-14.1,13.8-29,18.7-44.3
                            c9.9-30.6,14.9-62.9,15.8-95.2l0.1-6.1c0-2,0.1-4,0-6.1l-0.2-12.1l-0.6-12.1c-0.1-2-0.3-4-0.5-6l-0.5-6c-1.6-16.1-4-32.1-7.3-48
                            c-7-31.6-17.1-62.5-31.3-91.3c-14.1-28.8-31.8-55.9-53.2-79.3c-10.6-11.7-22.2-22.5-34.6-31.9c-12.4-9.5-25.6-17.6-39.5-24
                            c-13.9-6.4-28.4-11.1-43.2-13.1c-14.8-2.1-29.8-2-44.5,0.7l-5.5,1.2c-1.8,0.4-3.7,0.7-5.4,1.3l-5.4,1.6
                            c-0.9,0.3-1.8,0.5-2.7,0.8l-2.6,1l-5.3,2c-1.7,0.7-3.4,1.6-5.1,2.3l-2.6,1.2l-1.3,0.6l-1.2,0.7l-5,2.7
                            c-13.3,7.3-25.4,17-36.3,28.1c-10.9,11.1-20.6,23.7-29,37.2c-8.4,13.5-15.6,28-21.5,43.1c-5.9,15.1-10.6,30.8-14.2,46.8
                            c-3.5,16-5.9,32.3-7.1,48.8l-0.4,6.2c-0.1,2.1-0.3,4.1-0.3,6.2l-0.3,12.4l0.2,12.4c0,4.1,0.4,8.3,0.6,12.4
                            c0.2,4.1,0.6,8.2,1,12.4l0.6,6.2c0.2,2.1,0.5,4.1,0.8,6.2l0.8,6.2l0.4,3.1l0.5,3.1L1141.8,3142.7z M1138.8,3143.3l-2.4-12.3
                            l-0.6-3.1l-0.5-3.1l-1-6.2l-1-6.2l-0.8-6.2c-0.5-4.1-1.2-8.3-1.5-12.5l-0.6-6.2c-0.2-2.1-0.5-4.2-0.6-6.3l-0.9-12.5l-0.4-12.6
                            c-0.1-2.1-0.1-4.2-0.1-6.3l0-6.3c0.1-16.8,1.1-33.6,3.3-50.4c2.1-16.8,5.4-33.5,10.1-49.9c4.7-16.4,10.8-32.6,18.5-48.1
                            c7.8-15.5,17.3-30.4,28.8-43.9c11.5-13.5,24.9-25.7,40.3-35.3l5.8-3.5l1.5-0.9l1.5-0.8l3-1.6c2-1,4-2.1,6.1-3.1l6.3-2.7l3.2-1.3
                            c1-0.5,2.2-0.8,3.2-1.2l6.5-2.2c2.2-0.8,4.4-1.3,6.6-1.9l6.7-1.7l6.8-1.2c2.3-0.4,4.5-0.9,6.8-1l6.9-0.7
                            c1.1-0.1,2.3-0.3,3.4-0.3l3.4-0.1l6.9-0.2c2.3,0,4.6,0.2,6.9,0.3l3.4,0.2l1.7,0.1l1.7,0.2l6.8,0.8c18.2,2.3,35.7,7.9,52,15.4
                            c16.3,7.6,31.5,17.2,45.3,28.1c13.9,11,26.4,23.3,37.8,36.5c22.7,26.5,40.8,56.4,55,87.7l2.6,5.9c0.9,2,1.8,3.9,2.5,5.9l4.8,12
                            l4.3,12.1c0.8,2,1.4,4.1,2,6.1l2,6.1c5.1,16.3,9.3,33,12.6,49.7c3.2,16.8,5.4,33.8,6.7,50.8l0.4,6.4c0.1,2.1,0.3,4.3,0.4,6.4
                            l0.4,12.8l0,12.8c0,2.1-0.1,4.3-0.2,6.4l-0.3,6.4c-1.7,34.1-7.6,68.2-18.9,100.7c-5.7,16.2-12.7,32-21.3,47
                            c-8.6,15-18.8,29.1-30.6,41.9c-11.8,12.7-25.4,24-40.6,32.8c-15.1,8.8-31.8,15.1-48.9,18.5c-17.2,3.2-34.9,3.3-52.1,0.6
                            c-17.2-2.6-33.7-8.3-49-15.8c-15.4-7.5-29.6-17-42.7-27.7c-13.1-10.7-25-22.8-35.9-35.6c-10.9-12.8-20.6-26.5-29.4-40.8
                            c-8.8-14.2-16.6-29-23.6-44.2l-2.6-5.7c-0.8-1.9-1.7-3.8-2.5-5.7l-4.7-11.6l-4.4-11.7c-0.8-1.9-1.4-3.9-2-5.9l-2-5.9
                            c-1.4-3.9-2.5-7.9-3.7-11.9l-1.8-6c-0.6-2-1.1-4-1.6-6l-1.6-6l-0.8-3l-0.7-3L1138.8,3143.3z" />

                        </g>

                        <radialGradient id="SVGID_5_" cx="3984.0149" cy="3123.8999" r="159.8053"
                            gradientTransform="matrix(-1 0 0 1 5338.894 0)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style="stop-color:#FFFFFF" />
                            <stop offset="0.3513" style="stop-color:#FDFEFE" />
                            <stop offset="0.5288" style="stop-color:#F5FAFA" />
                            <stop offset="0.6674" style="stop-color:#E8F2F4" />
                            <stop offset="0.7858" style="stop-color:#D5E8EB" />
                            <stop offset="0.8913" style="stop-color:#BDDBE0" />
                            <stop offset="0.9863" style="stop-color:#9FCBD2" />
                            <stop offset="1" style="stop-color:#9AC8D0" />
                        </radialGradient>
                        <g class="lid">
                        <!-- eye blue R -->
                        <path id="blue_R" class="st5" d="M1222.7,3147.7c17.8,98.7,91.4,168.1,164.5,155s117.8-103.9,100-202.6s-91.4-168.1-164.5-155C1249.6,2958.3,1204.9,3049,1222.7,3147.7z" />

                        <radialGradient id="SVGID_6_" cx="3982.4844" cy="3118.2595" r="81.4287"
                            gradientTransform="matrix(-1 0 0 1 5338.894 0)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" style="stop-color:#4D4D4D" />
                            <stop offset="0.3785" style="stop-color:#4B4B4B" />
                            <stop offset="0.5698" style="stop-color:#434343" />
                            <stop offset="0.719" style="stop-color:#363636" />
                            <stop offset="0.8466" style="stop-color:#232323" />
                            <stop offset="0.9592" style="stop-color:#0B0B0B" />
                            <stop offset="1" style="stop-color:#000000" />
                        </radialGradient>
                        
                        <!-- pupil R -->
                        <path id="pupil_R" class="st6" d="M1288.2,3130.6c-9.1-50,14.1-96,51.8-102.8c37.7-6.8,75.5,28.2,84.6,78.1c9.1,50-14.1,96-51.8,102.8S1297.3,3180.6,1288.2,3130.6z" />
                                                        
                        <!-- circle highlight R -->
                        <ellipse id="highlight_R" class="st3" cx="1401.8"
                            cy="3070.3" rx="31.3" ry="31.3" />
                        </g>
                        <!-- lash mid R -->
                        <path d="M1500,2962.6c0,0,110.2,7.5,117.8-115.3c0,0,36.3,125.3-96.5,147.8L1500,2962.6z" />
                        

                        <!-- lash lo R -->
                        <path d="M1523.4,2998.9c0,0,100.2,17.5,135.3-40.1c0,0-31.3,85.2-135.3,55.1V2998.9z" />
                        
                        <!-- lash hi R -->
                        <path d="M1475,2920c0,0,82.7-58.9,65.1-157.8c0,0,78.9,115.3-48.9,175.4L1475,2920z" />
                        
                        
                        <!-- brow R -->
                        <path id="brow_R"
                            d="M1445.7,2708.3c0,0-147.8-154.1-279.4-7.5l0,0c-10.4-19.2-7.1-42.9,8-58.6C1225.1,2589.6,1345.7,2500.6,1445.7,2708.3z" />
                        
                        <!-- highlight ellipse R -->
                        <ellipse class="st3" cx="1344" cy="3070.5" rx="17" ry="8.5" />
                    </g>
                        <!-- eye bag R -->
                        <path d="M1522.1,3427.4c0,0-176.6-117.8-309.4-6.3C1212.7,3421.1,1420.6,3386,1522.1,3427.4z" />
                        <!-- helper -->
                        <circle cx="1390" cy="3400" r="4" stroke="black" stroke-width="1" fill="red" />
                </g>
            </svg>
        </div>
        <div id="rightControl">
            <joystick-comp id="rightEye" x="" y=""></joystick-comp>
            <joystick-comp id="rightEyeFull" x="" y=""></joystick-comp>
        </div>
    </div>
`

class eye extends HTMLElement
{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"}) // zorgt ervoor dart het component een afgeschermde stijl kan hebben
        shadow.append(template.content.cloneNode(true))
        
        this.leftEye = this.shadowRoot.querySelector("#leftEye");
        this.leftEyeFull = this.shadowRoot.querySelector("#leftEyeFull");
        this.rightEye = this.shadowRoot.querySelector("#rightEye");
        this.rightEyeFull = this.shadowRoot.querySelector("#rightEyeFull");

        //selecteerd de wenkbrouwen
        this.leftBrow = this.shadowRoot.querySelector("#brow_L");
        this.rightBrow = this.shadowRoot.querySelector("#brow_R")

        //selecteerd de volledige ogen
        this.leftFullEye = this.shadowRoot.querySelector("#Ir_L");
        this.rightFullEye = this.shadowRoot.querySelector("#Ir_R");

        //selecteerd de iris
        this.pupil_R = this.shadowRoot.querySelector("#pupil_R");
        this.pupil_L = this.shadowRoot.querySelector("#pupil_L");

        //selecteerd het blauwe
        this.blue_R = this.shadowRoot.querySelector("#blue_R");
        this.blue_L = this.shadowRoot.querySelector("#blue_L");

        //selecteerd highlight
        this.highlight_R = this.shadowRoot.querySelector("#highlight_R");
        this.highlight_L = this.shadowRoot.querySelector("#highlight_L");
    }
    
    handler(e){
        // console.log(e.detail)
        let x = 0;
        let y = 0;
        switch(e.detail){
            case "leftEye":
                console.log(e.detail);
                
                y = +this.leftEye.getAttribute("y");
                x = +this.leftEye.getAttribute("x");

                this.pupil_L.setAttribute("d", `M${955 - x}.9,${3198 - y}.1c9.1-50-14.1-96-51.8-102.8c-37.7-6.8-75.5,28.2-84.6,78.1s14.1,96,51.8,102.8C${909 - x},${3283 - y}.1,${946 - x}.8,${3248 - y}.1,${955 - x}.9,${3198 - y}.1z`);

                this.blue_L.setAttribute("d", `M${1021 - x}.5,${3215 - y}.3c-17.8,98.7-91.4,168.1-164.5,155c-73-13.2-117.8-103.9-100-202.6s91.4-168.1,164.5-155C${994 - x}.5,${3025 - y}.8,${1039 - x}.3,${3116 - y}.5,${1021 - x}.5,${3215 - y}.3z`);
                
                this.highlight_L.setAttribute("cx", `${842.3 - x}`);
                this.highlight_L.setAttribute("cy", `${3137.9 - y}`);
                cx="792.3"
                cy="3087.9"
                break;
                
            case "leftEyeFull":
                // console.log(e.detail);

                y = +this.leftEyeFull.getAttribute("y");
                this.leftBrow.setAttribute("d", `M748.4,${(2675+y)}.8c0,0,147.8-154.1,279.4-7.5l0,0c10.4-19.2,7.1-42.9-8-58.6C969.1,${2557 + y}.1,848.4,${(2468 + y)}.2,748.4,${(2675 + y)}.8z`);
                
                //<g id="Ir_L" transform="rotate(-8,820,3410)">
                x= +this.leftEyeFull.getAttribute("x");
                this.leftFullEye.setAttribute("transform", `rotate(-${(x/100)*14},820,3410)`);

                break;

            case "rightEye":
                console.log(e.detail);

                y = +this.rightEye.getAttribute("y");
                x = +this.rightEye.getAttribute("x");

                this.pupil_R.setAttribute("d", `M${1338 - x}.2,${3180 - y}.6c-9.1-50,14.1-96,51.8-102.8c37.7-6.8,75.5,28.2,84.6,78.1c9.1,50-14.1,96-51.8,102.8 S${1347 - x}.3,${3230-y}.6,${1338 - x}.2,${3180-y}.6z`);

                this.blue_R.setAttribute("d", `M${1272 - x}.7,${3197 - y}.7c17.8,98.7,91.4,168.1,164.5,155s117.8-103.9,100-202.6s-91.4-168.1-164.5-155C${1299 - x}.6,${3008 - y}.3,${1254 - x}.9,${3099 - y},${1272 - x}.7,${3197 - y}.7z`);

                this.highlight_R.setAttribute("cx", `${1451.8 - x}`);
                this.highlight_R.setAttribute("cy", `${3120.3 - y}`);


                break;

            case "rightEyeFull":
                // console.log(e.detail);

                y = +this.rightEyeFull.getAttribute("y");
                this.rightBrow.setAttribute("d",`M1445.7,${(2675+y)}.3c0,0-147.8-154.1-279.4-7.5l0,0c-10.4-19.2-7.1-42.9,8-58.6C1225.1,${2557 + y}.6,1345.7,${(2468 + y)}.6,1445.7,${(2675 + y)}.3z`);
                
                x= +this.rightEyeFull.getAttribute("x");
                this.rightFullEye.setAttribute("transform", `rotate(${(x/100)*14},1390,3400)`);
                // rotate(8,1390,3400)

                break;
        }
    }

    connectedCallback() {
        this.addEventListener('moved', this.handler)
    }

    
}

customElements.define('eye-comp', eye)