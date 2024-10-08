import { StyleHeroImageCompleteBig } from "../CustomBlocksTelefonica/Molecules/InternalHero/ImageCompleteBig";
import { StyleImageCompleteBigCenter } from "../CustomBlocksTelefonica/Molecules/InternalHero/ImageCompleteBigCenter";
import { StylePlanCardContent } from "../CustomBlocksTelefonica/Molecules/PlanCard/PlanCard";
import { StylePlanCardFeatContent } from "../CustomBlocksTelefonica/Molecules/PlanCard/PlanCardFeature";
import { StyleValuePrepCenter } from "../CustomBlocksTelefonica/Molecules/ValuePreposition/valuePrepCenter";
export const styles = `

.bg-light{
   background-color:rgb(255, 255, 255);
}
.title-section-vp{
   font-family:Telefonica-Regular, sans-serif;
   font-size:40px;
   line-height:48px;
   color:rgb(255, 255, 255);
   margin-top:0px;
   margin-right:auto;
   margin-bottom:16px;
   margin-left:auto;
   text-align:center;
}
.description-vp{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:24px;
   color:rgb(255, 255, 255);
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   text-align:center;
}
.card-dark-left{
   background-color:rgb(11, 39, 57);
   padding-top:0px;
   padding-right:0px;
   padding-bottom:32px;
   padding-left:0px;
   overflow-x:hidden;
   overflow-y:hidden;
   border-top-width:1px;
   border-right-width:1px;
   border-bottom-width:1px;
   border-left-width:1px;
   border-top-style:solid;
   border-right-style:solid;
   border-bottom-style:solid;
   border-left-style:solid;
   border-top-color:rgb(115, 117, 120);
   border-right-color:rgb(115, 117, 120);
   border-bottom-color:rgb(115, 117, 120);
   border-left-color:rgb(115, 117, 120);
   border-image-source:initial;
   border-image-slice:initial;
   border-image-width:initial;
   border-image-outset:initial;
   border-image-repeat:initial;
   display:flex;
   flex-direction:column;
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
}
.card-dark-left .img-content{
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:0px;
   border-bottom-left-radius:0px;
   overflow-x:hidden;
   overflow-y:hidden;
   height:344px;
}
.card-dark-left .img-content img{
   width:100%;
   height:inherit;
   object-fit:cover;
}
.card-dark-left .txt-content{
   padding-top:24px;
   padding-right:24px;
   padding-bottom:0px;
   padding-left:24px;
}
.card-dark-left .txt-content .pretitle{
   font-family:Roboto;
   font-size:014px;
   line-height:20px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-dark-left .txt-content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:24px;
   line-height:32px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-dark-left .txt-content .subtitle{
   font-family:Roboto;
   font-size:014px;
   line-height:20px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-dark-left .txt-content .description{
   font-family:Roboto;
   font-size:16px;
   line-height:24px;
   color:rgb(255, 255, 255);
   overflow-x:hidden;
   overflow-y:hidden;
   display:-webkit-box;
   -webkit-line-clamp:3;
   -webkit-box-orient:vertical;
   margin-top:0px;
   margin-right:0px;
   margin-bottom:0px;
   margin-left:0px;
}
.card-dark-left .button-group{
   display:flex;
   flex-direction:row;
   align-items:center;
   row-gap:16px;
   column-gap:16px;
   margin-top:16px;
}
.card-dark-left .button-group .link-button{
   font-family:Roboto;
   font-weight:500;
   font-size:014px;
   line-height:26px;
   color:rgb(1, 155, 239);
   text-decoration-line:underline;
   text-decoration-thickness:initial;
   text-decoration-style:initial;
   text-decoration-color:initial;
   text-underline-offset:4px;
   -webkit-user-modify:read-write;
}
.card-dark-left .button-group .primary-button{
   font-family:Roboto;
   font-weight:500;
   font-size:014px;
   line-height:26px;
   background-color:rgb(1, 155, 239);
   color:rgb(255, 255, 255);
   padding-top:12px;
   padding-right:16px;
   padding-bottom:11px;
   padding-left:16px;
   text-decoration-line:none;
   text-decoration-thickness:initial;
   text-decoration-style:initial;
   text-decoration-color:initial;
   border-top-left-radius:60px;
   border-top-right-radius:60px;
   border-bottom-right-radius:60px;
   border-bottom-left-radius:60px;
   -webkit-user-modify:read-write;
}
.bg-dark{
   background-color:rgb(11, 39, 57);
}
.mt-64{
   margin-top:64px !important;
}
.card-hero-left-d{
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   padding-top:32px;
   padding-right:64px;
   padding-bottom:32px;
   padding-left:64px;
   display:grid;
   grid-template-columns:40% 60%;
   align-items:center;
}
.card-hero-left-d .content{
   order:2;
   padding-top:24px;
   padding-right:24px;
   padding-bottom:0px;
   padding-left:24px;
}
.card-hero-left-d .content .pretitle{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-left-d .content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:40px;
   line-height:48px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-left-d .content .subtitle{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-left-d .content .description{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
}
.card-hero-left-d .content ul li{
   font-size:18px;
   line-height:26px;
   color:rgb(115, 117, 120);
}
.card-hero-left-d .content .button-group{
   display:flex;
   flex-direction:row;
   align-items:center;
   row-gap:16px;
   column-gap:16px;
}
.card-hero-left-d .img-content{
   overflow-x:hidden;
   overflow-y:hidden;
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
   order:1;
}
.card-hero-left-d .img-content img{
   width:100%;
   height:auto;
}
.card-hero-left-d .button-group .link-button{
   font-family:Roboto;
   font-weight:500;
   font-size:16px;
   line-height:26px;
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
   color:rgb(255, 255, 255);
   text-decoration-line:underline;
   text-decoration-thickness:initial;
   text-decoration-style:initial;
   text-decoration-color:initial;
   text-underline-offset:4px;
   -webkit-user-modify:read-write;
   text-align:center;
}
.card-hero-left-d .button-group .primary-button{
   font-family:Roboto;
   font-weight:500;
   font-size:16px;
   line-height:26px;
   background-color:rgb(1, 155, 239);
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
   padding-top:12px;
   padding-right:16px;
   padding-bottom:11px;
   padding-left:16px;
   border-top-left-radius:60px;
   border-top-right-radius:60px;
   border-bottom-right-radius:60px;
   border-bottom-left-radius:60px;
   -webkit-user-modify:read-write;
   text-align:center;
}
.card-hero-right-d{
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   padding-top:32px;
   padding-right:64px;
   padding-bottom:32px;
   padding-left:64px;
   display:grid;
   grid-template-columns:60% 40%;
   align-items:center;
}
.card-hero-right-d .content{
   order:1;
   padding-top:24px;
   padding-right:24px;
   padding-bottom:0px;
   padding-left:24px;
}
.card-hero-right-d .content .pretitle{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-right-d .content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:40px;
   line-height:48px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-right-d .content .subtitle{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-right-d .content .description{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
}
.card-hero-right-d .content ul li{
   font-size:18px;
   line-height:26px;
   color:rgb(255, 255, 255);
}
.card-hero-right-d .content .button-group{
   display:flex;
   flex-direction:row;
   align-items:center;
   row-gap:16px;
   column-gap:16px;
}
.card-hero-right-d .img-content{
   overflow-x:hidden;
   overflow-y:hidden;
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
   order:2;
}
.card-hero-right-d .img-content img{
   width:100%;
   height:auto;
}
.card-hero-right-d .button-group .link-button{
   font-family:Roboto;
   font-weight:500;
   font-size:16px;
   line-height:26px;
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
   color:rgb(1, 155, 239);
   text-decoration-line:underline;
   text-decoration-thickness:initial;
   text-decoration-style:initial;
   text-decoration-color:initial;
   text-underline-offset:4px;
   -webkit-user-modify:read-write;
   text-align:center;
}
.card-hero-right-d .button-group .primary-button{
   font-family:Roboto;
   font-weight:500;
   font-size:16px;
   line-height:26px;
   background-color:rgb(1, 155, 239);
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
   padding-top:12px;
   padding-right:16px;
   padding-bottom:11px;
   padding-left:16px;
   border-top-left-radius:60px;
   border-top-right-radius:60px;
   border-bottom-right-radius:60px;
   border-bottom-left-radius:60px;
   -webkit-user-modify:read-write;
   text-align:center;
}
.odd-hero{
   background-image:initial;
   background-position-x:initial;
   background-position-y:initial;
   background-size:initial;
   background-repeat:initial;
   background-attachment:initial;
   background-origin:initial;
   background-clip:initial;
   background-color:rgba(255, 255, 255, 0.1);
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
}
.title-section-light3col{
   font-family:Telefonica-Regular, sans-serif;
   font-size:40px;
   line-height:48px;
   color:rgb(49, 50, 53);
   margin-top:0px;
   margin-right:auto;
   margin-bottom:16px;
   margin-left:auto;
   text-align:center;
}
.description-light3col{
   font-family:Roboto;
   font-weight:400;
   font-size:18px;
   line-height:24px;
   color:rgb(115, 117, 120);
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   text-align:center;
}
.card-light-3col{
   background-color:rgb(255, 255, 255);
   padding-top:0px;
   padding-right:0px;
   padding-bottom:32px;
   padding-left:0px;
   overflow-x:hidden;
   overflow-y:hidden;
   display:flex;
   flex-direction:column;
   border-top-width:1px;
   border-right-width:1px;
   border-bottom-width:1px;
   border-left-width:1px;
   border-top-style:solid;
   border-right-style:solid;
   border-bottom-style:solid;
   border-left-style:solid;
   border-top-color:rgb(221, 221, 221);
   border-right-color:rgb(221, 221, 221);
   border-bottom-color:rgb(221, 221, 221);
   border-left-color:rgb(221, 221, 221);
   border-image-source:initial;
   border-image-slice:initial;
   border-image-width:initial;
   border-image-outset:initial;
   border-image-repeat:initial;
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
}
.card-light-3col .img-content{
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:0px;
   border-bottom-left-radius:0px;
   overflow-x:hidden;
   overflow-y:hidden;
   height:344px;
}
.card-light-3col .img-content img{
   width:100%;
   height:inherit;
   object-fit:cover;
}
.card-light-3col .txt-content{
   padding-top:24px;
   padding-right:24px;
   padding-bottom:0px;
   padding-left:24px;
}
.card-light-3col .txt-content .tag{
   font-family:Roboto;
   background-color:rgb(246, 236, 246);
   padding-top:4px;
   padding-right:4px;
   padding-bottom:3px;
   padding-left:4px;
   border-top-left-radius:4px;
   border-top-right-radius:4px;
   border-bottom-right-radius:4px;
   border-bottom-left-radius:4px;
   font-size:14px;
   display:flex;
   align-items:center;
   justify-content:center;
   color:rgb(113, 43, 113);
   margin-bottom:8px;
   width:fit-content;
}
.card-light-3col .txt-content .pretitle{
   font-family:Roboto;
   font-size:014px;
   line-height:20px;
   color:rgb(49, 50, 53);
   margin-bottom:8px;
}
.card-light-3col .txt-content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:24px;
   line-height:32px;
   color:rgb(49, 50, 53);
   margin-bottom:8px;
}
.card-light-3col .txt-content .subtitle{
   font-family:Roboto;
   font-size:014px;
   line-height:20px;
   color:rgb(49, 50, 53);
   margin-bottom:8px;
}
.card-light-3col .txt-content .description{
   font-family:Roboto;
   font-size:16px;
   line-height:24px;
   color:rgb(115, 117, 120);
   overflow-x:hidden;
   overflow-y:hidden;
   display:-webkit-box;
   -webkit-line-clamp:3;
   -webkit-box-orient:vertical;
   margin-top:0px;
   margin-right:0px;
   margin-bottom:0px;
   margin-left:0px;
}
.card-light-3col .button-group{
   display:flex;
   flex-direction:row;
   align-items:center;
   row-gap:16px;
   column-gap:16px;
   margin-top:16px;
}
.card-light-3col .button-group .link-button{
   font-family:Roboto;
   font-weight:500;
   font-size:014px;
   line-height:26px;
   color:rgb(1, 155, 239);
   text-decoration-line:underline;
   text-decoration-thickness:initial;
   text-decoration-style:initial;
   text-decoration-color:initial;
   text-underline-offset:4px;
   -webkit-user-modify:read-write;
}
.card-light-3col .button-group .primary-button{
   font-family:Roboto;
   font-weight:500;
   font-size:014px;
   line-height:26px;
   background-color:rgb(1, 155, 239);
   color:rgb(255, 255, 255);
   padding-top:12px;
   padding-right:16px;
   padding-bottom:11px;
   padding-left:16px;
   text-decoration-line:none;
   text-decoration-thickness:initial;
   text-decoration-style:initial;
   text-decoration-color:initial;
   border-top-left-radius:60px;
   border-top-right-radius:60px;
   border-bottom-right-radius:60px;
   border-bottom-left-radius:60px;
   -webkit-user-modify:read-write;
}
#i5mhpa{
   white-space-collapse:preserve;
}
#imleik{
   white-space-collapse:preserve;
}
#ixz399{
   white-space-collapse:preserve;
}
#ii0ha{
   color:rgb(255, 255, 255);
}
#i33n6j{
   white-space-collapse:preserve;
}
#i8m7sj{
   white-space-collapse:preserve;
}
#ik8vw2{
   white-space-collapse:preserve;
}
#i6p0vy{
   white-space-collapse:preserve;
}
#ibvmw5{
   white-space-collapse:preserve;
}
#ivnzaf{
   color:rgb(255, 255, 255);
}
#ibg712{
   color:#ffffff;
}
#ic096r{
   color:#ffffff;
}
#ijyjzg{
   white-space-collapse:preserve;
}
#iyqtxa{
   white-space-collapse:preserve;
}
#i2zrxj{
   white-space-collapse:preserve;
}
#ipjm5o{
   white-space-collapse:preserve;
}
@font-face {
    font-family: 'Telefonica-Regular';
    src: url('fonts/telefonica-regular-webfont.woff2') format('woff2'),
         url('fonts/telefonica-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Telefonica-Light';
    src: url('fonts/telefonica-light-webfont.woff2') format('woff2'),
         url('fonts/telefonica-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Telefonica-Bold';
    src: url('fonts/telefonica-bold-webfont.woff2') format('woff2'),
         url('fonts/telefonica-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@media (max-width: 767px){
   .card{
      margin-bottom:24px;
   }
   .card-feat{
      margin-bottom:24px;
   }
   .mt-64{
      margin-top:32px !important;
   }
}
@media (max-width: 767px){ 
   .title-section-vp{
      margin-top:0px;
      margin-right:auto;
      margin-bottom:16px;
      margin-left:auto;
      font-size:28px;
      line-height:36px;
   }
   .description-vp{
      font-size:16px;
      line-height:24px;
      margin-bottom:32px;
   }
   .card-dark-left .txt-content .pretitle{
      font-size:12px;
      line-height:20px;
   }
   .card-dark-left .txt-content .title{
      font-size:20px;
      line-height:28px;
   }
   .card-dark-left .txt-content .subtitle{
      font-size:12px;
      line-height:20px;
   }
   .card-dark-left .txt-content .description{
      font-size:014px;
      line-height:20px;
   }
   .card-dark-left .button-group .link-button{
      font-size:014px;
      line-height:20px;
   }
   .card-dark-left .button-group .primary-button{
      font-size:014px;
      line-height:20px;
   }
   .card-hero-left-d{
      display:flex;
      flex-direction:column;
      padding-top:0px;
      padding-right:0px;
      padding-bottom:24px;
      padding-left:0px;
      border-top-width:1px;
      border-right-width:1px;
      border-bottom-width:1px;
      border-left-width:1px;
      border-top-style:solid;
      border-right-style:solid;
      border-bottom-style:solid;
      border-left-style:solid;
      border-top-color:rgb(115, 117, 120);
      border-right-color:rgb(115, 117, 120);
      border-bottom-color:rgb(115, 117, 120);
      border-left-color:rgb(115, 117, 120);
      border-image-source:initial;
      border-image-slice:initial;
      border-image-width:initial;
      border-image-outset:initial;
      border-image-repeat:initial;
      border-top-left-radius:16px;
      border-top-right-radius:16px;
      border-bottom-right-radius:16px;
      border-bottom-left-radius:16px;
      row-gap:initial;
   }
   .card-hero-left-d .content{
      order:2;
   }
   .card-hero-left-d .content .title{
      font-size:24px;
      line-height:32px;
   }
   .card-hero-left-d .content .description{
      font-size:16px;
      line-height:24px;
   }
   .card-hero-left-d .content ul li{
      font-size:16px;
      line-height:24px;
   }
   .card-hero-left-d .img-content{
      order:1;
      height:344px;
      overflow-x:hidden;
      overflow-y:hidden;
      border-bottom-left-radius:0px;
   }
   .card-hero-left-d .img-content img{
      width:100%;
      height:inherit;
      object-fit:cover;
   }
   .card-hero-left-d .button-group .link-button{
      margin-top:16px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      font-size:014px;
   }
   .card-hero-left-d .button-group .primary-button{
      padding-top:12px;
      padding-right:8px;
      padding-bottom:12px;
      padding-left:8px;
      margin-top:16px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
   }
   .card-hero-right-d{
      display:flex;
      flex-direction:column;
      padding-top:0px;
      padding-right:0px;
      padding-bottom:24px;
      padding-left:0px;
      border-top-width:1px;
      border-right-width:1px;
      border-bottom-width:1px;
      border-left-width:1px;
      border-top-style:solid;
      border-right-style:solid;
      border-bottom-style:solid;
      border-left-style:solid;
      border-top-color:rgb(115, 117, 120);
      border-right-color:rgb(115, 117, 120);
      border-bottom-color:rgb(115, 117, 120);
      border-left-color:rgb(115, 117, 120);
      border-image-source:initial;
      border-image-slice:initial;
      border-image-width:initial;
      border-image-outset:initial;
      border-image-repeat:initial;
      border-top-left-radius:16px;
      border-top-right-radius:16px;
      border-bottom-right-radius:16px;
      border-bottom-left-radius:16px;
      row-gap:initial;
   }
   .card-hero-right-d .content{
      order:2;
   }
   .card-hero-right-d .content .title{
      font-size:24px;
      line-height:32px;
   }
   .card-hero-right-d .content .description{
      font-size:16px;
      line-height:24px;
   }
   .card-hero-right-d .content ul li{
      font-size:16px;
      line-height:24px;
   }
   .card-hero-right-d .img-content{
      order:1;
      height:344px;
      overflow-x:hidden;
      overflow-y:hidden;
      border-bottom-right-radius:0px;
      border-bottom-left-radius:0px;
   }
   .card-hero-right-d .img-content img{
      width:100%;
      height:inherit;
      object-fit:cover;
   }
   .card-hero-right-d .button-group .link-button{
      margin-top:0px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      font-size:014px;
   }
   .card-hero-right-d .button-group .primary-button{
      padding-top:12px;
      padding-right:8px;
      padding-bottom:12px;
      padding-left:8px;
      margin-top:0px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
   }
   .title-section-light3col{
      margin-top:0px;
      margin-right:auto;
      margin-bottom:16px;
      margin-left:auto;
      font-size:28px;
      line-height:36px;
   }
   .description-light3col{
      font-size:16px;
      line-height:24px;
      margin-bottom:32px;
   }
   .card-light-3col .txt-content .pretitle{
      font-size:12px;
      line-height:20px;
   }
   .card-light-3col .txt-content .title{
      font-size:20px;
      line-height:28px;
   }
   .card-light-3col .txt-content .subtitle{
      font-size:12px;
      line-height:20px;
   }
   .card-light-3col .txt-content .description{
      font-size:014px;
      line-height:20px;
   }
   .card-light-3col .button-group .link-button{
      font-size:014px;
      line-height:20px;
   }
   .card-light-3col .button-group .primary-button{
      font-size:014px;
      line-height:20px;
   }
}
   .roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}
  ${StyleHeroImageCompleteBig}
  ${StyleValuePrepCenter}
  ${StylePlanCardContent}
  ${StylePlanCardFeatContent}
  ${StyleImageCompleteBigCenter}
  `