import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class sub extends Component {
    render () {
        return (

			<div className="product-model">
			  <div className="container">
				<ol className="breadcrumb">
				  <li><a href="index.html">MOA</a></li>
				  <li className="active">펀딩하기</li>
				</ol>
			  </div>
			  <div id="page-container">
				{/* S : MAIN */}
				<div id="container" className="wd-layout-sub-content reward actionbar-hide">
				  {/* S : 캠페인 액션바 */}
				  {/* E : 리워드 네비게이션 */}
				  <div className="reward-body-wrap">
					{/* S : 서브 컨텐트 영역 */}
					<div className="wd-ui-sub-contents">
					  {/* S : 페이지 레이아웃 컨테이너 */}
					  <div className="wd-ui-info-wrap">
						{/* S : 우측 캠페인 관련 정보 */}
						<div className="wd-ui-sub-opener-info" style={{paddingTop: 0}}>
						  {/* S : 프로젝트 정보 ******************************************************************* 웹 */}
						  <h3 className="text-hidden" style={{fontSize: "50px"}}>프로젝트 정보</h3>
						  <div className="project-state-info">
							<div className="state-box">
							  <p className="remaining-day">종료</p>
							  <p className="rate-bar">
							  <em style={{width: '100%'}} />
							  </p>
							  <p className="achievement-rate" style={{marginBottom: "16px"}}>
								<strong>100</strong>% 달성
							  </p>
							  <p className="total-amount" style={{marginBottom: '16px'}}>
								<strong>595,000</strong>원 펀딩
							  </p>
							  <p className="total-supporter" style={{marginBottom: '16px'}}>
								<strong>86</strong>명의 서포터
							  </p>
							</div>
							<div className="btn-wrap share">
							  <div className="btn-wrap-flex">
								<button id="btnLike" className="campaign-like btn-like">
								  <i className="icon-like" /> <em id="cntLike" className="cnt-like">39</em>
								</button>
								<button className="campaign-message btn-message">
								  <i className="chat-o icon" aria-hidden="true" />문의
								</button>
								<button id="btnShare" className="campaign-share btn-share" onclick="wadiz.share.kakaoSdkInit();">공유하기</button>
							  </div>
							  <div id="shareSection" className="share-section">
								<ul className="share-list" style={{marginTop: '10px'}}>
								  <li><button className="wz button dense icon-facebook circular" onclick="wadiz.share.facebook();" title="페이스북 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-kakao circular" onclick="wadiz.share.kakao();" title="카카오톡 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-twitter circular" onclick="wadiz.share.twitter();" title="트위터 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-link circular" onclick="wadiz.share.urlCopy();" title="URL 공유" style={{width: '36px', padding: 0}} /></li>
								  <li><button className="wz button dense icon-code circular" onclick="window.open('/web/embed/reward/134520','_blank');" title="임베드 공유" style={{width: '36px', padding: 0}} /></li>
								</ul>
							  </div>
							</div>
						  </div>
						  {/*E : 프로젝트 정보  */}
						  {/* S : 인기 프로젝트 리스트 */}
						  <div id="normalpane" className="recommend-box-container">
							{/* E : 공간 사이드 배너 */}
							<div className="recommend-box" style={{border: '0px', padding: '0px', margin: '0px'}}>
							  <div className="App_container__t0vcU">
								<div className="PopularDesktop_container__3UXQV">
								  <div className="PopularDesktop_header__3rc0H">
									<div className="PopularDesktop_title__39tIW">펀딩 랭킹 TOP10</div>
									<div className="Tooltip_container__36IdB">
									  <div className="Tooltip_symbol__3pUOM">
										<div style={{display: 'none'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltip__1MtXO" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 1a19 19 0 1019 19A19.06 19.06 0 0020 1zm0 29.5a1.8 1.8 0 111.8-1.79 1.8 1.8 0 01-1.8 1.75zm6-16.13a6.28 6.28 0 01-2.7 5.2l-.6.5c-1.7 1.7-1.7 2.4-1.7 4.3h-2a6.51 6.51 0 012.3-5.7L22 18a4.29 4.29 0 002-3.7 3.7 3.7 0 00-4-4 3.7 3.7 0 00-4 4h-2a5.7 5.7 0 016-6 5.7 5.7 0 016 6z" /></svg>
										</div>
										<div style={{display: 'block'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltipActive__1fmny" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 39a19 19 0 1119-19 19.06 19.06 0 01-19 19zm0-36a17 17 0 1017 17A17 17 0 0020 3z" />
											<path d="M24.34 10A5.75 5.75 0 0020 8.33a5.7 5.7 0 00-6 6h2a3.7 3.7 0 014-4 3.7 3.7 0 014 4A4.29 4.29 0 0122 18l-.7.6a6.51 6.51 0 00-2.3 5.7h2c0-1.9 0-2.6 1.7-4.3l.6-.5a6.28 6.28 0 002.7-5.2 5.73 5.73 0 00-1.66-4.3zM20 26.87a1.8 1.8 0 100 3.6 1.8 1.8 0 100-3.6z" /></svg>
										</div>
									  </div>
									</div>
								  </div>
								  <div className="PopularDesktop_separator__13mT5" />
								  <div className="CardTable_container__3wIpe" style={{width: 'calc(100% - 0px)'}}>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">1</div> <a className="PopularCardDesktop_projectName__3HH8P" href="#" title="">김민철씨를 기억하시나요?</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">2</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135539?_refer_section_st=Popular_1" title="">LOW, 아이들의 벽에 사랑을 그립니다.</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">3</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135154?_refer_section_st=Popular_2" title="">부모님의 가장 젊은 오늘을 의미있게 기록할수있도록! [리마인드웨딩/가족사진]</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">4</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/136274?_refer_section_st=Popular_3" title="">꿈의 테슬라 화성 갈수있도록 조금만 도와주세요</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">5</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/133373?_refer_section_st=Popular_4" title="">[셀프웨딩] 스몰 웨딩 드레스</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">6</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/134020?_refer_section_st=Popular_5" title="">시간이 지나도 변하지 않는 세계여행</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">7</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/137270?_refer_section_st=Popular_6" title="">이사하는 친구를 위한 청소기 모금!</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">8</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/135370?_refer_section_st=Popular_7" title="">우리 인경이의 첫돌</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '8px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">9</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/123916?_refer_section_st=Popular_8" title="">나 혼자 하는 파이썬 코딩! 후원 부탁 드려요!</a></li>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '0px'}}>
									  <li className="PopularCardDesktop_item__2NBkG"><div className="PopularCardDesktop_ranking__1iPy2">10</div> <a className="PopularCardDesktop_projectName__3HH8P" href="/web/campaign/detail/136434?_refer_section_st=Popular_9" title="">3팀 화이팅</a></li>
									</div>
								  </div>
								</div>
								<div className="AIRecommendationDesktop_container__Kh9H6">
								  <div className="AIRecommendationDesktop_header__20IOW">
									<div className="AIRecommendationDesktop_title__3ULAg">같이
									  펀딩하기 좋은</div>
									<div className="Tooltip_container__36IdB">
									  <div className="Tooltip_symbol__3pUOM">
										<span className="AISymbol_icon__2gIjg" />
										<div style={{display: 'none'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltip__1MtXO" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 1a19 19 0 1019 19A19.06 19.06 0 0020 1zm0 29.5a1.8 1.8 0 111.8-1.79 1.8 1.8 0 01-1.8 1.75zm6-16.13a6.28 6.28 0 01-2.7 5.2l-.6.5c-1.7 1.7-1.7 2.4-1.7 4.3h-2a6.51 6.51 0 012.3-5.7L22 18a4.29 4.29 0 002-3.7 3.7 3.7 0 00-4-4 3.7 3.7 0 00-4 4h-2a5.7 5.7 0 016-6 5.7 5.7 0 016 6z" /></svg>
										</div>
										<div style={{display: 'block'}}>
										  <svg viewBox="0 0 40 40" focusable="false" role="presentation" className="withIcon_icon__2cPeY Tooltip_tooltipActive__1fmny" aria-hidden="true">
											<path fill="none" d="M0 0h40v40H0z" />
											<path d="M20 39a19 19 0 1119-19 19.06 19.06 0 01-19 19zm0-36a17 17 0 1017 17A17 17 0 0020 3z" />
											<path d="M24.34 10A5.75 5.75 0 0020 8.33a5.7 5.7 0 00-6 6h2a3.7 3.7 0 014-4 3.7 3.7 0 014 4A4.29 4.29 0 0122 18l-.7.6a6.51 6.51 0 00-2.3 5.7h2c0-1.9 0-2.6 1.7-4.3l.6-.5a6.28 6.28 0 002.7-5.2 5.73 5.73 0 00-1.66-4.3zM20 26.87a1.8 1.8 0 100 3.6 1.8 1.8 0 100-3.6z" /></svg>
										</div>
									  </div>
									</div>
								  </div>
								  <div className="AIRecommendationDesktop_separator__2CNAl" />
								  <div className="CardTable_container__3wIpe" style={{width: 'calc(100% - 0px)'}}>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '12px'}}>
									  <a href="/sub" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="">김민철씨를 기억하시나요?</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">100%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">기부·후원</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2015/0427/RLBDBOHMTVZA.jpg/wadiz/format/jpg/quality/80/optimize") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2015/0427/RLBDBOHMTVZA.jpg/wadiz/format/jpg/quality/80/optimize") 2x)'}} />
										  </div>
										</div></a>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '12px'}}>
									  <a href="/web/campaign/detail/128210?_refer_section_st=coItemCurator_1" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="">LOW, 아이들의 벽에 사랑을 그립니다.</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">100%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">기부·후원</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2018/1122/20181122115522913_27351.jpg/wadiz/format/jpg/quality/80/optimize") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2018/1122/20181122115522913_27351.jpg/wadiz/format/jpg/quality/80/optimize") 2x)'}} />
										  </div>
										</div></a>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '12px'}}>
									  <a href="/web/campaign/detail/134465?_refer_section_st=coItemCurator_2" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="">부모님의 가장 젊은 오늘을 의미있게 기록할수있도록! [리마인드웨딩/가족사진]</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">100%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">기부·후원</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/wwwwadiz/green001/2020/0326/20200326130250009_63141.jpg/wadiz/resize/273/quality/85/optimize/") 1x, url("https://cdn.wadiz.kr/wwwwadiz/green001/2020/0326/20200326130250009_63141.jpg/wadiz/resize/273/quality/85/optimize/") 2x)'}} />
										  </div>
										</div></a>
									</div>
									<div aria-hidden="true" className="CardTable_itemContainer__I168f" style={{width: 'calc(( 100% - 0px + 0px)- 0.01px)', marginLeft: '0px', marginRight: '0px', marginBottom: '0px'}}>
									  <a href="/web/campaign/detail/131744?_refer_section_st=coItemCurator_3" className="RecommendationCardDesktop_item__1n6Ae"><div className="RecommendationCardDesktop_contentContainer__mxIVf">
										  <div className="RecommendationCardDesktop_projectName__1pkEQ" title="">꿈의 테슬라 화성 갈수있도록 조금만 도와주세요</div>
										  <div className="RecommendationCardDesktop_description__2mUxw">
											<div className="RecommendationCardDesktop_rate__2d-I1">10%</div>
											<div className="RecommendationCardDesktop_category__Yj-QH">스포츠·모빌리티</div>
										  </div>
										</div>
										<div className="RecommendationCardDesktop_thumbnailContainer__jBLTR">
										  <div className="RecommendationCardDesktop_thumbnailPlaceholder__1mk2W" style={{paddingTop: 'calc(70% - 0px)'}}>
											<div className="RecommendationCardDesktop_thumbnail__2SkGD RecommendationCardDesktop_visible__3Bx9p" style={{backgroundImage: '-webkit-image-set(url("https://cdn.wadiz.kr/ft/images/green001/2019/0601/20190601175502235_70.jpg/wadiz/resize/273/quality/85/optimize/") 1x, url("https://cdn.wadiz.kr/ft/images/green001/2019/0601/20190601175502235_70.jpg/wadiz/resize/273/quality/85/optimize/") 2x)'}} />
										  </div>
										</div></a>
									</div>
								  </div>
								</div>
							  </div>
							</div>
						  </div>
						  {/* E : 인기 프로젝트 리스트 */}
						</div>
						{/* E : 우측 캠페인 관련 정보 */}
						{/* S : 캠페인 정보 */}
						<div className="wd-ui-sub-campaign-info-container">
						  <div className="wd-ui-sub-campaign-info">
							{/* S : 탭 주요 콘텐츠 */}
							<div className="wd-ui-tab-contents">
							  <section className="wd-ui-tab-contents">
								<h3 className="text-hidden">프로젝트 스토리</h3>
								<div className="view-slide-wrap" style={{padding: 0}}>
								  <ul className="view-slide-big image-slide slick-initialized slick-slider" style={{}}>
									<div aria-live="polite" className="slick-list draggable" style={{height: '401px'}}>
									  <div className="slick-track" role="listbox" style={{opacity: 1, width: '800px'}}>
										<li className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={-1} role="option" aria-describedby="slick-slide00" style={{width: '100%', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1}}>
										  <div className="img-responsive" style={{background: 'url("https://cdn.wadiz.kr/wwwwadiz/green001/2020/0319/20200319162057247_63141.jpg/wadiz/format/jpg/quality/80/optimize")', backgroundSize: 'cover', backgroundPosition: 'center 0', width: '100%', height: 0, paddingBottom: '63.49%'}} />
										</li>
									  </div>
									</div>
								  </ul>
								</div>
								{/* S : campaign 컨텐츠 */}
								<div className="wd-ui-campaign-content">
								  <div className="wd-ui-cont" style={{paddingTop: '100px'}}>
									{/* S : 프로젝트 정보 */}
									<div className="project-state-info">
									  <div className="state-box">
										<p className="remaining-day" style={{marginBottom: '16px', color: '#495057'}}>13일 남음</p>
										<p className="rate-bar" style={{marginBottom: '8px'}}>
										  <em style={{width: '100%'}} />
										</p>
										<p className="achievement-rate" style={{marginBottom: '8px', lineHeight: '30px', color: '#495057'}}>
										  <strong>100</strong>% 달성
										</p>
										<p className="total-amount" style={{marginBottom: '8px', lineHeight: '30px', color: '#495057'}}>
										  <strong>595,500</strong>원 펀딩
										</p>
										<p className="total-supporter" style={{marginBottom: '6px', lineHeight: '30px', color: '#495057'}}>
										  <strong>86</strong>명의 서포터
										</p>
									  </div>
									  <div className="btn-wrap share">
										<div className="btn-wrap-flex">
										  <button className="campaign-like btn-like">
											<i className="icon-like" /> <em id="cntLike" className="cnt-like">39</em>
										  </button>
										  <button className="campaign-message btn-message">
											<i className="chat-o icon" aria-hidden="true" />문의
										  </button>
										  <button className="campaign-share btn-share" onclick="wadiz.share.kakaoSdkInit();">공유하기</button>
										</div>
										<div id="shareSection" className="share-section">
										  <ul className="share-list">
											<li><button className="wz button dense icon-facebook circular" onclick="wadiz.share.facebook();" title="페이스북 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-kakao circular" onclick="wadiz.share.kakao();" title="카카오톡 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-twitter circular" onclick="wadiz.share.twitter();" title="트위터 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-link circular" onclick="wadiz.share.urlCopy();" title="URL 공유" style={{width: '36px', padding: 0}} /></li>
											<li><button className="wz button dense icon-code circular" onclick="window.open('/web/embed/reward/134520','_blank');" title="임베드 공유" style={{width: '36px', padding: 0}} /></li>
										  </ul>
										</div>
									  </div>
									</div>
									{/* E : 프로젝트 정보 */}
									<div id="reward-detail-news-up-list" className="news-up-list" data-campaign-id={134520} style={{display: 'none'}} />
									{/* S : 프로젝트 내용 */}
									<div id="introdetails" style={{height: 'auto'}} className="story">
									  <div className="inner-contents fr-view">
										<blockquote className="type-default">
										  <p>부모님을 위한 특별한 효도선물 사랑하는 부모님의 가장 젊은 오늘의 모습을 사진으로 남기기위한! [ 토탈 리마인드 + 가족사진 촬영권 ]</p>
										</blockquote>
										<p>우리 부모님들 또한 사랑에 빠져 평생을 함께 하자는 약속을 했던 청춘남녀였습니다.</p>
										<p>
										  <img className="fr-fic fr-dib lazyloaded" data-width={500} data-height={335} data-src="https://cdn.wadiz.kr/ft/images/green001/2020/0406/20200406194133302_82.jpg/wadiz/format/jpg/quality/80/optimize" style={{}} src="https://cdn.wadiz.kr/ft/images/green001/2020/0406/20200406194133302_82.jpg/wadiz/format/jpg/quality/80/optimize" />
										</p>
										<p>평생 자식들의 행복만을 위해 살아오신 우리의 어머니와 아버지... 본인들의 이름보다 누군가의 엄마 또는 아빠로 불려지고 살아가는게 익숙하신 우리의 부모님들... 돌아오는 가정의 달 5월, 한없이 받기만한 사랑과 은혜를 조금이나마 돌려드릴수있는 뜻깊은 효도선물/결혼기념일 을 할까 합니다. </p>
										<p>
										  <br />
										</p>
										<p>
										  <img data-fr-image-pasted="true" data-width={650} data-height={682} className="fr-fic fr-dib lazyloaded" data-src="https://cdn.wadiz.kr/ft/images/green001/2020/0406/20200406194251598_52.jpg/wadiz/format/jpg/quality/80/optimize" style={{}} src="https://cdn.wadiz.kr/ft/images/green001/2020/0406/20200406194251598_52.jpg/wadiz/format/jpg/quality/80/optimize" />
										  그렇게 수많은 결혼식을 다녀도 결코 우리가 갈수 없는 중요한 결혼식이 하나 있었으니... 그건 바로 우리 엄마 아빠의 결혼식!
										</p>
									  </div>
									</div>
									{/* E : 프로젝트 내용 */}
								  </div>
								</div>
							  </section>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  );
		}
	  }

export default sub;