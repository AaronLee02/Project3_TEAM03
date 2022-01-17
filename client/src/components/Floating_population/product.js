import React, { Component } from "react";
import { Link } from "react-router-dom";

class product extends Component {
  render() {
    return (
      <div className="product-model">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="index.html">MOA</a>
            </li>
            <li className="active">펀딩하기</li>
          </ol>
          <div className="RewardCategoryCircleList_container__1GDge">
            <div className="CategoryCircleList_container__3fAVd">
              {/* <button
                  class="CategoryCircleList_previous__xJMxg CategoryCircleList_hidden__2fdvp"
                  type="button" data-dir="이전">
                  <i class="icon chevron-left CategoryCircleList_icon__13sH8"
                      aria-hidden="true"></i>
              </button>  */}
              <div className="CategoryCircleList_wrap__3jHrp">
                <div className="CategoryCircleList_list__2YBF3">
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_287.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        테크·가전
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_288.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        패션·잡화
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_311.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">뷰티</span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_289.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">푸드</span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_310.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        홈·리빙
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_296.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        여행·레저
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_297.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        스포츠·모빌리티
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_character.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        캐릭터·굿즈
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_309.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        베이비·키즈
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_308.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        반려동물
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_292.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        게임·취미
                      </span>
                    </span>
                  </a>
                  <a
                    className="CategoryCircleList_item__2_QZ3 RewardCategoryCircleList_item__2JEvT"
                    href="#"
                  >
                    <span className="CategoryCircle_container__2rZ3a">
                      <span
                        className="CategoryCircle_circle__3khwj"
                        style={{
                          backgroundImage:
                            'url("https://static.wadiz.kr/assets/reward-category/reward_banner_thumb/reward_banner_thumb_312.jpg")',
                        }}
                      />
                      <span className="CategoryCircle_name__3Ca9T">
                        기부·후원
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              {/* <button class="CategoryCircleList_next__1mHyX" type="button"
                  data-dir="다음">
                  <i class="icon chevron-right CategoryCircleList_icon__13sH8"
                      aria-hidden="true"></i>
              </button>  */}
            </div>
          </div>
          <div className="RewardProjectListApp_container__1ZYeD">
            <div className="ProjectListHead_container__rpQ37 RewardProjectListHead_container__2FzIj">
              <div className="ProjectListHead_bar__2dyHz">
                <div className="SortingSelect_container__3voSC ProjectListHead_sorting__2n1WY RewardProjectListHead_fundingSorting__2n0MF">
                  전체
                  <i
                    className="icon expand-more SortingSelect_icon__khE3_"
                    aria-hidden="true"
                  />
                  <select name="status" className="SortingSelect_select__23ANT">
                    <option value="ALL">전체</option>
                    <option value="N">진행중</option>
                    <option value="Y">종료된</option>
                  </select>
                </div>
                <div className="SortingSelect_container__3voSC ProjectListHead_sorting__2n1WY">
                  추천순
                  <i
                    className="icon expand-more SortingSelect_icon__khE3_"
                    aria-hidden="true"
                  />
                  <select name="order" className="SortingSelect_select__23ANT">
                    <option value="recommend">추천순</option>
                    <option value="popular">인기순</option>
                    <option value="amount">펀딩액순</option>
                    <option value="closing">마감임박순</option>
                    <option value="recent">최신순</option>
                    <option value="support">응원참여자순</option>
                  </select>
                </div>
                <div className="ProjectListHead_children__2Y7-F" />
                <button className="ProjectListHead_cardType__2_YL4" />
              </div>
              <div className="ProjectListHead_children__2Y7-F" />
            </div>
            <div className="ProjectCardList_container__3Y14k">
              <div className="ProjectCardList_list__1YBa2">

              <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn.wadiz.kr/wwwwadiz/green001/2020/0326/20200326130250009_63141.jpg/wadiz/resize/273/quality/85/optimize/")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a
                              href="/sub"
                              className="CardLink_link__1k83H"
                            >
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                부모님의 가장 젊은 오늘을 의미있게 기록할수있도록! [리마인드웨딩/가족사진]
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                              기부·후원
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                김승화
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "100%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            100%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            595,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              종료
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu">
                              <em>성공</em>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn.wadiz.kr/wwwwadiz/green001/2018/1122/20181122115522913_27351.jpg/wadiz/format/jpg/quality/80/optimize")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a
                              href="/sub"
                              className="CardLink_link__1k83H"
                            >
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                  LOW, 아이들의 벽에 사랑을 그립니다.
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                기부·후원
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                김민경
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "100%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            100%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            1,195,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              종료
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu">
                              <em>성공</em>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn.wadiz.kr/wwwwadiz/green001/2015/0427/RLBDBOHMTVZA.jpg/wadiz/format/jpg/quality/80/optimize")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a
                              href="/sub"
                              className="CardLink_link__1k83H"
                            >
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                [네팔 긴급구호] 한순간 무너진 네팔 카트만두
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                기부·후원
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                김민철
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "100%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            100%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            770,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              종료
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu">
                              <em>성공</em>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn.wadiz.kr/ft/images/green001/2019/0601/20190601175502235_70.jpg/wadiz/resize/273/quality/85/optimize/")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a href="/sub" className="CardLink_link__1k83H">
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                꿈의 테슬라 화성 갈수있도록 조금만 도와주세요
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                              스포츠·모빌리티
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                이순규
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "81%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            10%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            380,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              종료
                            </span>
                            <span className="RewardProjectCard_remainingDayText__2sRLV">
                              실패
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn.wadiz.kr/wwwwadiz/green001/2019/0430/20190430170659513_34750.jpg/wadiz/resize/273/quality/85/optimize/")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a href="/sub" className="CardLink_link__1k83H">
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                  [셀프웨딩] 스몰 웨딩 드레스
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                패션·잡화
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                김인경
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "50%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            50%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            380,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              21일
                            </span>
                            <span className="RewardProjectCard_remainingDayText__2sRLV">
                              남음
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn2.wadiz.kr/2021/09/01/1d0cc233-04f5-457c-bd60-6e8d4b90b77c")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a href="/sub" className="CardLink_link__1k83H">
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                시간이 지나도 변하지 않는 세계여행
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                여행·레저
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                이원용
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "34%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            34%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                           10,000,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              60일
                            </span>
                            <span className="RewardProjectCard_remainingDayText__2sRLV">
                              남음
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn1.wadiz.kr/images/20211229/1640763193090.png/wadiz/optimize")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a href="/sub" className="CardLink_link__1k83H">
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                  이사하는 친구를 위한 청소기 모금!
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                테크·가전
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                이진경
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "77%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            77%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            370,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              11일
                            </span>
                            <span className="RewardProjectCard_remainingDayText__2sRLV">
                              남음
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn.wadiz.kr/wwwwadiz/green001/2021/1007/20211007164738692_125097.jpg/wadiz/resize/314/quality/85/optimize/")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a href="/sub" className="CardLink_link__1k83H">
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                  우리 인경이의 첫돌 
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                기부·후원
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                이순규
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "88%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            88%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            15,960,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              18일
                            </span>
                            <span className="RewardProjectCard_remainingDayText__2sRLV">
                              남음
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ProjectCardList_item__1owJa">
                  <div>
                    <div className="CommonCard_container__e_ebQ CommonCard_squareSmall__1Cdkn">
                      <a
                        href="/sub"
                        className="CardLink_link__1k83H CommonCard_image__vaqkf"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <div className="CommonCard_rect__2wpm4">
                          <span
                            className="CommonCard_background__3toTR CommonCard_visible__ABkYx"
                            style={{
                              backgroundImage:
                                'url("https://cdn2.wadiz.kr/2021/12/06/5f2907e4-bf28-47b2-b817-2105807f7e08.jpg/wadiz/resize/314/quality/85/optimize/")',
                            }}
                          />
                        </div>
                      </a>
                      <div className="CommonCard_info__1f4kq">
                        <div className="RewardProjectCard_info__3JFub">
                          <div className="RewardProjectCard_infoTop__3QR5w">
                            <a href="/sub" className="CardLink_link__1k83H">
                              <p className="CommonCard_title__1oKJY RewardProjectCard_title__iUtvs">
                                <strong>
                                  나 혼자 하는 파이썬 코딩! 후원 부탁 드려요!
                                </strong>
                              </p>
                            </a>
                            <div>
                              <span className="RewardProjectCard_category__2muXk">
                                게임·취미
                              </span>
                              <span className="RewardProjectCard_makerName__2q4oH">
                                김민철
                              </span>
                            </div>
                          </div>
                          <div className="RewardProjectCard_gauge__3p9US">
                            <span style={{ width: "30%" }} />
                          </div>
                          <span className="RewardProjectCard_percent__3TW4_">
                            30%
                          </span>
                          <span className="RewardProjectCard_amount__2AyJF">
                            500,000원
                          </span>
                          <span className="RewardProjectCard_days__3eece RewardProjectCard_isAchieve__1LcUu">
                            <span className="RewardProjectCard_remainingDay__2TqyN">
                              39일
                            </span>
                            <span className="RewardProjectCard_remainingDayText__2sRLV">
                              남음
                            </span>
                            <span className="RewardProjectCard_isAchieve__1LcUu" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>

                <div className="ProjectListMoreButton_container__1JFxX ProjectCardList_more__3AbzT">
                  <button
                    type="button"
                    className="ProjectListMoreButton_button__27eTb"
                  >
                    더보기
                    <i className="icon expand-more" aria-hidden="true" />
                  </button>
                  <div className="wz-loader ProjectListMoreButton_loader__1Kcvt" />
                </div>
              </div>
            </div>
          </div>
          {/* <div class="rsidebar span_1_of_left">
               <section  class="sky-form">
                   <div class="product_right">
                       <h4 class="m_2"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Categories</h4>
                       <div class="tab1">
                           <ul class="place">								
                               <li class="sort">Fashion</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Gifts</p></a>
                                  <a href="#"><p>Flowers</p></a>
                                  <a href="#"><p>Shoes</p></a>
                                  <a href="#"><p>Suits</p></a>
                                  <a href="#"><p>Dresses</p></a>
                           </div>
                        </div>						  
                        <div class="tab2">
                           <ul class="place">								
                               <li class="sort">Women Ethnic Wear</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Sarees & More</p></a>
                                  <a href="#"><p>Salwar Suits</p></a>									
                           </div>
                        </div>
                        <div class="tab3">
                           <ul class="place">								
                               <li class="sort">Personal Care</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Make Up</p></a>
                           </div>
                        </div>
                        <div class="tab4">
                           <ul class="place">								
                               <li class="sort">Jewellery</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Fashion</p></a>
                                  <a href="#"><p>Precious</p></a>
                                  <a href="#"><p>1 Gram Gold</p></a>
                           </div>
                        </div>
                        <div class="tab5">
                           <ul class="place">								
                               <li class="sort">Specials</li>
                               <li class="by"><img src="/resources/images/do.png" alt=""></li>
                                  <div class="clearfix"> </div>
                            </ul>
                           <div class="single-bottom">						
                                  <a href="#"><p>Cakes</p></a>
                                  <a href="#"><p>Party Items</p></a>
                                  <a href="#"><p></p></a>
                                  <a href="#"><p>Relax Chairs</p></a>
                           </div>
                        </div>
                        
                        script
                      
                      script					 
               </section>
               <section  href="/resources/css/form.css"  type="sky-form">
                   <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>DISCOUNTS</h4>
                   <div class="row row1 scroll-pane">
                       <div class="col col-4">
                              <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Upto - 10% (20)</label>
                       </div>
                       <div class="col col-4">
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>40% - 50% (5)</label>
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>30% - 20% (7)</label>
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>10% - 5% (2)</label>
                              <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Other(50)</label>
                       </div>
                   </div>
               </section> 				 				 
                 <section  class="sky-form">
                      <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Price</h4>
                          <ul class="dropdown-menu1">
                               <li><a href="">								               
                              <div id="slider-range"></div>							
                              <input type="text" id="amount" style="border: 0; font-weight: NORMAL;   font-family: 'Arimo', sans-serif;" />
                           </a></li>			
                        </ul>
                 </section>
                
                   
                   <link rel="stylesheet" type="text/css" href="/resources/css/jquery-ui.css">
                  
                  
                   <section  class="sky-form">
                      <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Type</h4>
                          <div class="row row1 scroll-pane">
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>1 Gram Gold (30)</label>
                              </div>
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Gold Plated   (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Platinum      (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Silver        (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Jewellery Sets  (30)</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Stone Items   (30)</label>
                              </div>
                          </div>
                 </section>
                         <section  class="sky-form">
                      <h4><span class="glyphicon glyphicon-minus" aria-hidden="true"></span>Brand</h4>
                          <div class="row row1 scroll-pane">
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Akasana Collectio</label>
                              </div>
                              <div class="col col-4">
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Colori</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Crafts Hub</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Jisha</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Karatcart</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox" ><i></i>Titan</label>
                                  <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Amuktaa</label>
                              </div>
                          </div>
                 </section>			
           </div>	 */}
        </div>
      </div>
    );
  }
}

export default product;
