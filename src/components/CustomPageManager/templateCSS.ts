import { StylePlanCardContent } from "../CustomBlocksTelefonica/Cards/PlanCard";
import { StylePlanCardFeatContent } from "../CustomBlocksTelefonica/Cards/PlanCardFeature";
export const styles = `
.section-hero{
   background-color:rgb(255, 255, 255);
}
.image-hero{
   width:100%;
   min-height:524px;
}
.gradient-hero{
   width:80%;
   position:absolute;
   top:0px;
   left:0px;
   height:524px;
   background-image:linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 76%);
   background-position-x:initial;
   background-position-y:initial;
   background-size:initial;
   background-repeat:initial;
   background-attachment:initial;
   background-origin:initial;
   background-clip:initial;
   background-color:initial;
}
.hero-image-complete{
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   padding-top:32px;
   padding-right:20px;
   padding-bottom:40px;
   padding-left:20px;
   display:grid;
   grid-template-columns:60% 40%;
   row-gap:24px;
   column-gap:24px;
   align-items:center;
}
.hero-image-complete .content{
   order:1;
}
.hero-image-complete .content .tag-label{
   font-family:Roboto;
   font-weight:500;
   border-top-left-radius:4px;
   border-top-right-radius:4px;
   border-bottom-right-radius:4px;
   border-bottom-left-radius:4px;
   padding-top:4px;
   padding-right:4px;
   padding-bottom:3px;
   padding-left:4px;
   margin-bottom:8px;
   color:rgb(1, 155, 239);
   font-size:0.875rem;
   width:fit-content;
}
.hero-image-complete .content .pretitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.hero-image-complete .content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:3rem;
   line-height:56px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.hero-image-complete .content .subtitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.hero-image-complete .content .description{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
}
.hero-image-complete .content ul li{
   font-size:1.125rem;
   line-height:26px;
   color:rgb(115, 117, 120);
}
.hero-image-complete .content .button-group{
   display:flex;
   flex-direction:row;
   align-items:center;
   row-gap:16px;
   column-gap:16px;
}
.hero-image-complete .img-content{
   overflow-x:hidden;
   overflow-y:hidden;
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
   order:2;
}
.hero-image-complete .img-content img{
   width:100%;
}
.hero-image-complete .button-group .link-button{
   font-family:Roboto;
   font-weight:500;
   font-size:1rem;
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
.hero-image-complete .button-group .primary-button{
   font-family:Roboto;
   font-weight:500;
   font-size:1rem;
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
.brand-low{
   background-color:rgb(230, 245, 253);
}
.ptb-80{
   padding-top:80px;
   padding-right:0px;
   padding-bottom:80px;
   padding-left:0px;
}
.p-relative-hero{
   position:relative;
   overflow-x:hidden;
   overflow-y:hidden;
   max-height:524px;
   display:flex;
   align-items:center;
}
.p-absolute-hero{
   position:absolute;
   transform:translate(-50%, -50%);
   top:50%;
   left:50%;
}
.title-section-vp-light{
   font-family:Telefonica-Regular, sans-serif;
   font-size:2.5rem;
   line-height:48px;
   color:rgb(49, 50, 53);
   margin-top:0px;
   margin-right:auto;
   margin-bottom:16px;
   margin-left:auto;
   text-align:center;
}
.description-vp-light{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:24px;
   color:rgb(115, 117, 120);
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   text-align:center;
}
.card-vp-img-light{
   display:flex;
   flex-direction:column;
   align-items:center;
   width:100%;
   text-align:center;
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
}
.card-vp-img-light .box-img{
   width:96px;
   height:96px;
   border-top-left-radius:8px;
   border-top-right-radius:8px;
   border-bottom-right-radius:8px;
   border-bottom-left-radius:8px;
   margin-bottom:24px;
   display:flex;
   justify-content:center;
   align-items:center;
   overflow-x:hidden;
   overflow-y:hidden;
}
.card-vp-img-light .box-img img{
   object-fit:contain;
   border-top-left-radius:inherit;
   border-top-right-radius:inherit;
   border-bottom-right-radius:inherit;
   border-bottom-left-radius:inherit;
   width:inherit;
   aspect-ratio:1 / 1;
}
.card-vp-img-light .title{
   font-family:Roboto;
   font-weight:400;
   font-size:1.25rem;
   line-height:28px;
   color:rgb(49, 50, 53);
}
.card-vp-img-light .description{
   font-family:Roboto;
   font-weight:400;
   font-size:1rem;
   line-height:24px;
   color:rgb(49, 50, 53);
   margin-top:8px;
   overflow-x:hidden;
   overflow-y:hidden;
   -webkit-line-clamp:3;
   -webkit-box-orient:vertical;
   display:block;
}
.card-vp-img-light .text-link{
   font-family:Roboto;
   font-weight:400;
   font-size:1rem;
   line-height:24px;
   color:rgb(1, 155, 239);
   margin-top:24px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   -webkit-user-modify:read-write;
}
.bg-light{
   background-color:rgb(255, 255, 255);
}
.title-section-vp{
   font-family:Telefonica-Regular, sans-serif;
   font-size:2.5rem;
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
   font-size:1.125rem;
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
   font-size:0.875rem;
   line-height:20px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-dark-left .txt-content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:1.5rem;
   line-height:32px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-dark-left .txt-content .subtitle{
   font-family:Roboto;
   font-size:0.875rem;
   line-height:20px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-dark-left .txt-content .description{
   font-family:Roboto;
   font-size:1rem;
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
   font-size:0.875rem;
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
   font-size:0.875rem;
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
.image-hero-big-center{
   width:100%;
   min-height:524px;
   opacity:0.4;
}
.hero-image-complete-center{
   margin-top:0px;
   margin-right:auto;
   margin-bottom:0px;
   margin-left:auto;
   padding-top:32px;
   padding-right:20px;
   padding-bottom:40px;
   padding-left:20px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   text-align:center;
}
.hero-image-complete-center .content{
   order:1;
}
.hero-image-complete-center .content .tag-label{
   font-family:Roboto;
   font-weight:500;
   border-top-left-radius:4px;
   border-top-right-radius:4px;
   border-bottom-right-radius:4px;
   border-bottom-left-radius:4px;
   padding-top:4px;
   padding-right:4px;
   padding-bottom:3px;
   padding-left:4px;
   margin-top:0px;
   margin-right:auto;
   margin-bottom:15px;
   margin-left:auto;
   color:rgb(1, 155, 239);
   font-size:0.875rem;
   width:fit-content;
}
.hero-image-complete-center .content .pretitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.hero-image-complete-center .content .title{
   font-family:Telefonica-Regular;
   font-size:3rem;
   line-height:56px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.hero-image-complete-center .content .subtitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.hero-image-complete-center .content .description{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
}
.hero-image-complete-center .content ul li{
   font-size:1.125rem;
   line-height:26px;
   color:rgb(115, 117, 120);
}
.hero-image-complete-center .content .button-group{
   display:flex;
   flex-direction:row;
   align-items:center;
   row-gap:16px;
   column-gap:16px;
   justify-content:center;
}
.hero-image-complete-center .img-content{
   overflow-x:hidden;
   overflow-y:hidden;
   border-top-left-radius:16px;
   border-top-right-radius:16px;
   border-bottom-right-radius:16px;
   border-bottom-left-radius:16px;
   order:2;
}
.hero-image-complete-center .img-content img{
   width:100%;
}
.hero-image-complete-center .button-group .link-button{
   font-family:Roboto;
   font-weight:500;
   font-size:1rem;
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
.hero-image-complete-center .button-group .primary-button{
   font-family:Roboto;
   font-weight:500;
   font-size:1rem;
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
.p-relative-hero-center{
   position:relative;
   overflow-x:hidden;
   overflow-y:hidden;
   max-height:524px;
   display:flex;
   align-items:center;
   background-color:rgb(0, 0, 0);
}
.p-absolute-hero-center{
   position:absolute;
   transform:translate(-50%, -50%);
   top:50%;
   left:50%;
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
.card-hero-left-d .content .tag-label{
   font-family:Roboto;
   font-weight:500;
   border-top-left-radius:4px;
   border-top-right-radius:4px;
   border-bottom-right-radius:4px;
   border-bottom-left-radius:4px;
   padding-top:4px;
   padding-right:4px;
   padding-bottom:3px;
   padding-left:4px;
   margin-bottom:8px;
   color:rgb(1, 155, 239);
   font-size:0.875rem;
   width:fit-content;
   background-color:rgb(230, 245, 253);
}
.card-hero-left-d .content .pretitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-left-d .content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:2.5rem;
   line-height:48px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-left-d .content .subtitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-left-d .content .description{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
}
.card-hero-left-d .content ul li{
   font-size:1.125rem;
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
   font-size:1rem;
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
   font-size:1rem;
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
.card-hero-right-d .content .tag-label{
   font-family:Roboto;
   font-weight:500;
   border-top-left-radius:4px;
   border-top-right-radius:4px;
   border-bottom-right-radius:4px;
   border-bottom-left-radius:4px;
   padding-top:4px;
   padding-right:4px;
   padding-bottom:3px;
   padding-left:4px;
   margin-bottom:8px;
   color:rgb(1, 155, 239);
   font-size:0.875rem;
   width:fit-content;
   background-color:rgb(230, 245, 253);
}
.card-hero-right-d .content .pretitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-right-d .content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:2.5rem;
   line-height:48px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-right-d .content .subtitle{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-bottom:8px;
}
.card-hero-right-d .content .description{
   font-family:Roboto;
   font-weight:400;
   font-size:1.125rem;
   line-height:26px;
   color:rgb(255, 255, 255);
   margin-top:24px;
   margin-right:0px;
   margin-bottom:24px;
   margin-left:0px;
}
.card-hero-right-d .content ul li{
   font-size:1.125rem;
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
   font-size:1rem;
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
   font-size:1rem;
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
   font-size:2.5rem;
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
   font-size:1.125rem;
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
   font-size:0.875rem;
   line-height:20px;
   color:rgb(49, 50, 53);
   margin-bottom:8px;
}
.card-light-3col .txt-content .title{
   font-family:Telefonica-Regular, sans-serif;
   font-size:1.5rem;
   line-height:32px;
   color:rgb(49, 50, 53);
   margin-bottom:8px;
}
.card-light-3col .txt-content .subtitle{
   font-family:Roboto;
   font-size:0.875rem;
   line-height:20px;
   color:rgb(49, 50, 53);
   margin-bottom:8px;
}
.card-light-3col .txt-content .description{
   font-family:Roboto;
   font-size:1rem;
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
   font-size:0.875rem;
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
   font-size:0.875rem;
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
@font-face{
   font-family:Telefonica-Regular;
   src:url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff2\"), url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff\");
   font-weight:400;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Light;
   src:url(\"fonts/Telefonica-Light.woff\") format(\"woff\"), url(\"fonts/Telefonica-Light.woff2\") format(\"woff2\"), url(\"fonts/Telefonica-Light.ttf\") format(\"truetype\");
   font-weight:300;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Regular;
   src:url(\"fonts/Telefonica-Regular.woff\") format(\"woff\"), url(\"fonts/Telefonica-Regular.woff2\") format(\"woff2\"), url(\"fonts/Telefonica-Regular.ttf\") format(\"truetype\");
   font-weight:400;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Bold;
   src:url(\"fonts/Telefonica-Bold.woff\") format(\"woff\"), url(\"fonts/Telefonica-Bold.woff2\") format(\"woff2\"), url(\"fonts/Telefonica-Bold.ttf\") format(\"truetype\");
   font-weight:600;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Medium;
   src:url(\"/fonts/Telefonica_Sans_Medium.woff2\") format(\"woff2\"), url(\"/fonts/Telefonica-Sans-Medium.woff\") format(\"woff\");
   font-weight:500;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Regular;
   src:url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff2\"), url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff\");
   font-weight:400;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Regular;
   src:url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff2\"), url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff\");
   font-weight:400;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Light;
   src:url(\"fonts/Telefonica-Light.woff\") format(\"woff\"), url(\"fonts/Telefonica-Light.woff2\") format(\"woff2\"), url(\"fonts/Telefonica-Light.ttf\") format(\"truetype\");
   font-weight:300;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Regular;
   src:url(\"fonts/Telefonica-Regular.woff\") format(\"woff\"), url(\"fonts/Telefonica-Regular.woff2\") format(\"woff2\"), url(\"fonts/Telefonica-Regular.ttf\") format(\"truetype\");
   font-weight:400;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Bold;
   src:url(\"fonts/Telefonica-Bold.woff\") format(\"woff\"), url(\"fonts/Telefonica-Bold.woff2\") format(\"woff2\"), url(\"fonts/Telefonica-Bold.ttf\") format(\"truetype\");
   font-weight:600;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Medium;
   src:url(\"/fonts/Telefonica_Sans_Medium.woff2\") format(\"woff2\"), url(\"/fonts/Telefonica-Sans-Medium.woff\") format(\"woff\");
   font-weight:500;
   font-style:normal;
   font-display:swap;
}
@font-face{
   font-family:Telefonica-Regular;
   src:url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff2\"), url(\"https://www.movistar.com.co/assets/fonts_movistar/Telefonica-Regular.woff2\") format(\"woff\");
   font-weight:400;
   font-style:normal;
   font-display:swap;
}
@media (max-width: 768px){
   .p-relative-hero{
      height:400px;
   }
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
   .section-hero{
      background-color:rgb(0, 0, 0);
   }
   .image-hero{
      width:100%;
      aspect-ratio:1 / 2;
      object-fit:cover;
   }
   .gradient-hero{
      width:100%;
      border-top-width:initial;
      border-right-width:initial;
      border-bottom-width:initial;
      border-left-width:initial;
      border-top-style:none;
      border-right-style:none;
      border-bottom-style:none;
      border-left-style:none;
      border-top-color:initial;
      border-right-color:initial;
      border-bottom-color:initial;
      border-left-color:initial;
      border-image-source:initial;
      border-image-slice:initial;
      border-image-width:initial;
      border-image-outset:initial;
      border-image-repeat:initial;
      height:400px;
      background-image:none;
      background-position-x:initial;
      background-position-y:initial;
      background-size:initial;
      background-repeat:initial;
      background-attachment:initial;
      background-origin:initial;
      background-clip:initial;
      background-color:initial;
      background-color: rgba(0,0,0, .7)
   }
   .hero-image-complete{
      display:flex;
      flex-direction:column;
      padding-top:24px;
      padding-right:24px;
      padding-bottom:24px;
      padding-left:24px;
      border-top-width:initial;
      border-right-width:initial;
      border-bottom-width:initial;
      border-left-width:initial;
      border-top-style:none;
      border-right-style:none;
      border-bottom-style:none;
      border-left-style:none;
      border-top-color:initial;
      border-right-color:initial;
      border-bottom-color:initial;
      border-left-color:initial;
      border-image-source:initial;
      border-image-slice:initial;
      border-image-width:initial;
      border-image-outset:initial;
      border-image-repeat:initial;
      row-gap:initial;
   }
   .hero-image-complete .content{
      order:2;
   }
   .hero-image-complete .content .title{
      font-size:1.5rem;
      line-height:32px;
   }
   .hero-image-complete .content .description{
      font-size:1rem;
      line-height:24px;
   }
   .hero-image-complete .content ul li{
      font-size:1rem;
      line-height:24px;
   }
   .hero-image-complete .img-content{
      order:1;
   }
   .hero-image-complete .button-group .link-button{
      margin-top:16px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      font-size:0.875rem;
   }
   .hero-image-complete .button-group .primary-button{
      padding-top:12px;
      padding-right:8px;
      padding-bottom:12px;
      padding-left:8px;
      margin-top:16px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
   }
   .ptb-80{
      padding-top:32px;
      padding-right:16px;
      padding-bottom:32px;
      padding-left:16px;
   }
   .title-section-vp-light{
      margin-top:0px;
      margin-right:auto;
      margin-bottom:16px;
      margin-left:auto;
      font-size:1.75rem;
      line-height:36px;
   }
   .description-vp-light{
      font-size:1rem;
      line-height:24px;
      margin-bottom:32px;
   }
   .card-vp-img-light{
      margin-top:0px;
      margin-right:auto;
      margin-bottom:24px;
      margin-left:auto;
   }
   .card-vp-img-light .title{
      font-size:1.125rem;
      line-height:24px;
   }
   .card-vp-img-light .description{
      font-size:0.875rem;
      line-height:20px;
   }
   .card-vp-img-light .text-link{
      font-size:0.875rem;
      line-height:20px;
   }
   .title-section-vp{
      margin-top:0px;
      margin-right:auto;
      margin-bottom:16px;
      margin-left:auto;
      font-size:1.75rem;
      line-height:36px;
   }
   .description-vp{
      font-size:1rem;
      line-height:24px;
      margin-bottom:32px;
   }
   .card-dark-left .txt-content .pretitle{
      font-size:0.75rem;
      line-height:20px;
   }
   .card-dark-left .txt-content .title{
      font-size:1.25rem;
      line-height:28px;
   }
   .card-dark-left .txt-content .subtitle{
      font-size:0.75rem;
      line-height:20px;
   }
   .card-dark-left .txt-content .description{
      font-size:0.875rem;
      line-height:20px;
   }
   .card-dark-left .button-group .link-button{
      font-size:0.875rem;
      line-height:20px;
   }
   .card-dark-left .button-group .primary-button{
      font-size:0.875rem;
      line-height:20px;
   }
   .image-hero-big-center{
      width:100%;
      aspect-ratio:1 / 2;
      object-fit:cover;
   }
   .hero-image-complete-center{
      padding-top:24px;
      padding-right:24px;
      padding-bottom:24px;
      padding-left:24px;
      border-top-width:initial;
      border-right-width:initial;
      border-bottom-width:initial;
      border-left-width:initial;
      border-top-style:none;
      border-right-style:none;
      border-bottom-style:none;
      border-left-style:none;
      border-top-color:initial;
      border-right-color:initial;
      border-bottom-color:initial;
      border-left-color:initial;
      border-image-source:initial;
      border-image-slice:initial;
      border-image-width:initial;
      border-image-outset:initial;
      border-image-repeat:initial;
   }
   .hero-image-complete-center .content{
      order:2;
   }
   .hero-image-complete-center .content .title{
      font-size:1.5rem;
      line-height:32px;
   }
   .hero-image-complete-center .content .description{
      font-size:1rem;
      line-height:24px;
   }
   .hero-image-complete-center .content ul li{
      font-size:1rem;
      line-height:24px;
   }
   .hero-image-complete-center .img-content{
      order:1;
   }
   .hero-image-complete-center .button-group .link-button{
      margin-top:16px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
      font-size:0.875rem;
   }
   .hero-image-complete-center .button-group .primary-button{
      padding-top:12px;
      padding-right:8px;
      padding-bottom:12px;
      padding-left:8px;
      margin-top:16px;
      margin-right:0px;
      margin-bottom:0px;
      margin-left:0px;
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
      font-size:1.5rem;
      line-height:32px;
   }
   .card-hero-left-d .content .description{
      font-size:1rem;
      line-height:24px;
   }
   .card-hero-left-d .content ul li{
      font-size:1rem;
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
      font-size:0.875rem;
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
      font-size:1.5rem;
      line-height:32px;
   }
   .card-hero-right-d .content .description{
      font-size:1rem;
      line-height:24px;
   }
   .card-hero-right-d .content ul li{
      font-size:1rem;
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
      font-size:0.875rem;
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
      font-size:1.75rem;
      line-height:36px;
   }
   .description-light3col{
      font-size:1rem;
      line-height:24px;
      margin-bottom:32px;
   }
   .card-light-3col .txt-content .pretitle{
      font-size:0.75rem;
      line-height:20px;
   }
   .card-light-3col .txt-content .title{
      font-size:1.25rem;
      line-height:28px;
   }
   .card-light-3col .txt-content .subtitle{
      font-size:0.75rem;
      line-height:20px;
   }
   .card-light-3col .txt-content .description{
      font-size:0.875rem;
      line-height:20px;
   }
   .card-light-3col .button-group .link-button{
      font-size:0.875rem;
      line-height:20px;
   }
   .card-light-3col .button-group .primary-button{
      font-size:0.875rem;
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
  ${StylePlanCardContent}
  ${StylePlanCardFeatContent}
`