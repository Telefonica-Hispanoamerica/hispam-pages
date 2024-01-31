import { Editor } from 'grapesjs';

function CardProduct(editor: Editor) {
	editor.Blocks.add('cardProduct', {
		id: 'cardProduct',
		label: 'Card de Producto',
		activate: true,
		content: `
			<div data-gjs-type="card-product" class="box-card-product">            
                <div class="content-img-product">
                    <img src="" class="img-product" />
                </div>
                <div class="content-colors-product">
                    <div class="item-color"></div>
                    <div class="item-color"></div>
                    <div class="item-color"></div>
                    <div class="item-color"></div>
                    <div class="item-color"></div>
                </div>
                <div class="content-tag-label-rank">
                    <div class="column-tags">
                        <div class="tag-label-box promo">
                            Tag label
                        </div>
                        <div class="tag-label-box promo-low">
                            Tag label
                        </div>
                    </div>
                    <div class="column-rank">
                        <div class="rank">
                            <p>5.0</p>
                            <img src="" class="img-rank" />
                        </div>
                    </div>
                </div>
                <div class="detail-product">
                    <h3>SAMSUNG</h3>
                    <h2>Galaxy S23</h2>
                    <h5>256GB | 8GB</h5>
                </div>
				<div class="price-product">
                    <h4>$4.800.000</h4>
                    <div class="price-more-discount">
                        <h3>$3.500.000</h3>
                        <div class="discount-box">
                            -25%
                        </div>
                    </div>
                </div>
				<button class="btn-primary">
					Add
				</button>
			</div>
			<style>
				.box-card-product {						
					background-color: #fff;
					padding: 16px;
					border-radius: 12px;
                    width: 255px;
                    margin: 0 auto;
                    border: 1px solid #F5F5F5;
				}
                .box-card-product .content-img-product {						
					background-color: #F5F5F5;
					border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
				}
                .box-card-product .content-img-product img {						
					width: 150px;
				}
                .box-card-product .content-colors-product {						
					display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    margin: 8px auto;
				}
                .box-card-product .content-colors-product .item-color {						
					width: 16px;
                    height:16px;
                    border-radius: 100%;
                    border: 1px solid #DDDDDD;
                    margin: 8px 12px;
				}
                .box-card-product .content-tag-label-rank {						
					display: grid;
                    grid-template-columns: 75% 25%;
                    grid-gap: 8px;
                    align-items: center;
				}
                .box-card-product .content-tag-label-rank .column-tags {						
					display: flex;
                    grid-gap: 8px;
				}
                .box-card-product .content-tag-label-rank .column-rank {						
					display: flex;
                    grid-gap: 8px
				}
                .box-card-product .content-tag-label-rank .tag-label-box  {						
                    text-align:center;
                    border-radius: 4px;
                    padding: 4px 4px 3px 4px;
                    font-family: 'Telefonica-Regular', sans-serif;
                    font-size: 14px;
					line-height: 20px;
                    font-weight: normal;
                    margin: 0;
				}
                .box-card-product .content-tag-label-rank .tag-label-box p {
                    margin: 0;
				}
                .box-card-product .content-tag-label-rank .tag-label-box.promo  {						
					background-color: #A13EA1;
                    color: #fff;
				}
                .box-card-product .content-tag-label-rank .tag-label-box.promo-low {						
					background-color: #F6ECF6;
                    color: #A13EA1;
				}
                .box-card-product .content-tag-label-rank .rank {
                    display: flex;
                    grid-gap: 8px;
                    align-items: center;
				}
                .box-card-product .content-tag-label-rank .rank p {
                    font-family: 'Telefonica-Regular', sans-serif;
                    font-size: 14px;
					line-height: 20px;
                    font-weight: normal;
                    margin: 0;
                    color: #737578;
				}
                .box-card-product .content-tag-label-rank .rank img {
                    width: 16px;
                    height:16px
				}
                .box-card-product .detail-product {
                    display: flex;
                    flex-direction:column;
                    margin: 16px 0;
				}
                .box-card-product .detail-product h3{
                    font-family: 'Telefonica-Regular', sans-serif;
                    font-size: 14px;
					line-height: 20px;
                    font-weight: normal;
                    margin: 0;
                    color: #737578;                    
				}
                .box-card-product .detail-product h2{
                    font-family: 'Telefonica-Bold', sans-serif;
                    font-size: 18px;
					line-height: 24px;
                    font-weight: 600;
                    margin: 0;
                    color: #313235; 
				}
                .box-card-product .detail-product h5{
                    font-family: 'Telefonica-Regular', sans-serif;
                    font-size: 14px;
					line-height: 20px;
                    font-weight: normal;
                    margin: 0;
                    color: #313235; 
				}
                .box-card-product .price-product{
                    display: flex;
                    flex-direction: column;
				}
                .box-card-product .price-product h4{
                    font-family: 'Telefonica-Regular', sans-serif;
                    font-size: 16px;
					line-height: 24px;
                    font-weight: normal;
                    margin: 0;
                    color: #737578;
                    text-decoration:line-through;
				}
                .box-card-product .price-product .price-more-discount{
                    display: flex;
                    flex-direction: row;
				}
                .box-card-product .price-product .price-more-discount h3{
                    font-family: 'Telefonica-Bold', sans-serif;
                    font-size: 24px;
					line-height: 30px;
                    font-weight: 600;
                    margin: 0 8px 0 0;
                    color: #313235;                     
				}
                .box-card-product .price-product .price-more-discount .discount-box{
                    font-family: 'Telefonica-Regular', sans-serif;
                    background-color: #A13EA1;
                    padding: 4px 4px 3px 4px;
                    color: #fff;
                    font-size: 14px;
					line-height: 20px;
                    text-align: center;
                    border-radius: 4px;
				}
				.box-card-product .btn-primary {
					background-color: #019DF4;
					border-radius: 60px;						
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: 'Telefonica-Bold', sans-serif;
					font-weight: 600;
					font-size: 14px;
					line-height: 20px;
					color: #fff;
					margin: 16px 0 0;
					padding: 6px 12px 5px 12px;
					border: 0;
                    min-width: 132px;
				}
			</style>
			`,
		category: 'Telefónica',
		media: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/></svg>',
		attributes: { class: 'custom-block' }
	});
}
  
export default CardProduct;