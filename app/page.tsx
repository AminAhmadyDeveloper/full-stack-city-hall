import SlickSlider from "@/components/slick-slider";
import { MainMenu } from "@/components/main-menu";

import author from "../assets/images/post-images/author/author-image-2.png";
import post from "../assets/images/post-images/post-images-1.jpg";
import banner from "../assets/images/add-banner/banner-03.png";
import grid from "../assets/images/post-images/post-grid-01.jpg";
import grid2 from "assets/images/post-images/post-grid-07.jpg";
import instagram from "../assets/images/small-images/instagram-md-01.jpg";
import video from "../assets/images/post-images/post-dark-01.jpg";
import video2 from "../assets/images/post-images/post-dark-04.jpg";
import logoBlack from "../assets/images/logo/logo-black.png";
import logoWhite from "../assets/images/logo/logo-white2.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main-wrapper">
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        <MainMenu />

        <h1 className="d-none">Home Default Blog</h1>
        <div className="slider-area bg-color-grey">
          <div className="axil-slide slider-style-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slider-activation axil-slick-arrow slick-initialized slick-slider">
                    <SlickSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div dir="rtl">
          <div className="axil-featured-post axil-section-gap bg-color-grey">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">آخرین اخبار</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30">
                  <div className="content-block content-direction-column axil-control is-active post-horizontal thumb-border-rounded">
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                              <span data-text="تعرفه عوارض محلی 1402">تعرفه عوارض محلی 1402</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="post-details.html">
                          با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                        </a>
                      </h4>
                    </div>
                    <div className="post-thumbnail">
                      <a href="post-details.html">
                        <Image src={post} alt="Author Images" width={0} height={0} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30">
                  <div className="content-block content-direction-column axil-control is-active post-horizontal thumb-border-rounded">
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                              <span data-text="تعرفه عوارض محلی 1402">تعرفه عوارض محلی 1402</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <h4 className="title">
                        <a href="post-details.html">
                          با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                        </a>
                      </h4>
                    </div>
                    <div className="post-thumbnail">
                      <a href="post-details.html">
                        <Image src={post} alt="Author Images" width={0} height={0} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-tab-area axil-section-gap bg-color-white">
            <div className="wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="axil-banner">
                      <div className="thumbnail">
                        <a href="#">
                          <Image src={banner} className="w-100" alt="Banner Images" width={0} height={0} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-post-grid-area axil-section-gap bg-color-grey">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">اخبار</h2>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="grid-tab-content tab-content mt--10">
                    <div className="single-post-grid tab-pane fade show active" id="gridone" role="tabpanel">
                      <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                          <div className="content-block post-grid post-grid-large mt--30">
                            <div className="post-thumbnail">
                              <a href="post-details.html">
                                <Image src={grid} width={0} height={0} alt="Post Images" />
                              </a>
                            </div>
                            <div className="post-grid-content">
                              <div className="post-content">
                                <div className="post-cat">
                                  <div className="post-cat-list">
                                    <a className="hover-flip-item-wrapper" href="#">
                                      <span className="hover-flip-item">
                                        <span data-text="DESIGN">تعرفه عوارض محلی 1402</span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="title">
                                  <a href="post-details.html">
                                    با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب
                                    و ...
                                  </a>
                                </h3>
                                <div className="post-meta-wrapper">
                                  <div className="post-meta">
                                    <div className="content">
                                      <h6 className="post-author-name">
                                        <a className="hover-flip-item-wrapper" href="author.html">
                                          <span className="hover-flip-item">
                                            <span data-text="شهرداری دریان">شهرداری دریان</span>
                                          </span>
                                        </a>
                                      </h6>
                                      <ul className="post-meta-list">
                                        <li>تاریخ: 1402/05/28</li>
                                        <li>300 بازدید</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <ul className="social-share-transparent justify-content-end">
                                    <li>
                                      <a href="#">
                                        <i className="fab fa-instagram" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-link" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                              <div className="content-block post-grid mt--30">
                                <div className="post-thumbnail">
                                  <a href="post-details.html">
                                    <Image src={grid2} width={0} height={0} alt="Post Images" />
                                  </a>
                                </div>
                                <div className="post-grid-content">
                                  <div className="post-content">
                                    <div className="post-cat">
                                      <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                          <span className="hover-flip-item">
                                            <span data-text="تعرفه عوارض محلی 1402">تعرفه عوارض محلی 1402</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <h4 className="title">
                                      <a href="post-details.html">
                                        با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان
                                        تصویب و ...
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-6 col-12">
                              <div className="content-block post-grid mt--30">
                                <div className="post-thumbnail">
                                  <a href="post-details.html">
                                    <Image src={grid2} width={0} height={0} alt="Post Images" />
                                  </a>
                                </div>
                                <div className="post-grid-content">
                                  <div className="post-content">
                                    <div className="post-cat">
                                      <div className="post-cat-list">
                                        <a className="hover-flip-item-wrapper" href="#">
                                          <span className="hover-flip-item">
                                            <span data-text="تعرفه عوارض محلی 1402">تعرفه عوارض محلی 1402</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <h4 className="title">
                                      <a href="post-details.html">
                                        با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان
                                        تصویب و ...
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="axil-banner">
                    <div className="thumbnail">
                      <a href="#">
                        <Image src={banner} className="w-100" alt="Author Images" width={0} height={0} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-video-post-area axil-section-gap bg-color-black">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">گالری تصاویر</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                  <div className="content-block post-default image-rounded mt--30">
                    <div className="post-thumbnail">
                      <a href="post-details.html">
                        <Image width={0} height={0} src={video} alt="Instagram Images" />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <a className="hover-flip-item-wrapper" href="#">
                            <span className="hover-flip-item">
                              <span data-text="عنوان عکس">عنوان عکس</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="post-details.html">
                          با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                        </a>
                      </h3>
                      <div className="post-meta-wrapper">
                        <div className="post-meta">
                          <div className="content">
                            <h6 className="post-author-name">
                              <a className="hover-flip-item-wrapper" href="author.html">
                                <span className="hover-flip-item">
                                  <span data-text="عکسبردار: نم کیم">عکسبردار: نم کیم</span>
                                </span>
                              </a>
                            </h6>
                            <ul className="post-meta-list">
                              <li>تاریخ: 1402/03/05</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="content-block post-default image-rounded mt--30">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <Image width={0} height={0} src={video2} alt="Instagram Images" />
                          </a>
                          <a className="video-popup size-medium position-top-center" href="post-details.html">
                            <span className="play-icon" />
                          </a>
                        </div>
                        <div className="post-content">
                          <div className="post-cat">
                            <div className="post-cat-list">
                              <a className="hover-flip-item-wrapper" href="#">
                                <span className="hover-flip-item">
                                  <span data-text="عنوان عکس">عنوان عکس</span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <h5 className="title">
                            <a href="post-details.html">
                              با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="content-block post-default image-rounded mt--30">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <Image width={0} height={0} src={video2} alt="Instagram Images" />
                          </a>
                          <a className="video-popup size-medium position-top-center" href="post-details.html">
                            <span className="play-icon" />
                          </a>
                        </div>
                        <div className="post-content">
                          <div className="post-cat">
                            <div className="post-cat-list">
                              <a className="hover-flip-item-wrapper" href="#">
                                <span className="hover-flip-item">
                                  <span data-text="عنوان عکس">عنوان عکس</span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <h5 className="title">
                            <a href="post-details.html">
                              با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="content-block post-default image-rounded mt--30">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <Image width={0} height={0} src={video2} alt="Instagram Images" />
                          </a>
                          <a className="video-popup size-medium position-top-center" href="post-details.html">
                            <span className="play-icon" />
                          </a>
                        </div>
                        <div className="post-content">
                          <div className="post-cat">
                            <div className="post-cat-list">
                              <a className="hover-flip-item-wrapper" href="#">
                                <span className="hover-flip-item">
                                  <span data-text="عنوان عکس">عنوان عکس</span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <h5 className="title">
                            <a href="post-details.html">
                              با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="content-block post-default image-rounded mt--30">
                        <div className="post-thumbnail">
                          <a href="post-details.html">
                            <Image width={0} height={0} src={video2} alt="Instagram Images" />
                          </a>
                          <a className="video-popup size-medium position-top-center" href="post-details.html">
                            <span className="play-icon" />
                          </a>
                        </div>
                        <div className="post-content">
                          <div className="post-cat">
                            <div className="post-cat-list">
                              <a className="hover-flip-item-wrapper" href="#">
                                <span className="hover-flip-item">
                                  <span data-text="عنوان عکس">عنوان عکس</span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <h5 className="title">
                            <a href="post-details.html">
                              با تلاش و همکاری اعضای محترم شورای شهرو شهرداری تعرفه عوارض محلی شهرداری دریان تصویب و ...
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-instagram-area axil-section-gap bg-color-grey">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">اینستاگرام</h2>
                  </div>
                </div>
              </div>
              <div className="row mt--30">
                <div className="col-lg-12">
                  <ul className="instagram-post-list">
                    <li className="single-post">
                      <a href="#">
                        <Image width={0} height={0} src={instagram} alt="Instagram Images" />
                        <span className="instagram-button">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li className="single-post">
                      <a href="#">
                        <Image width={0} height={0} src={instagram} alt="Instagram Images" />
                        <span className="instagram-button">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li className="single-post">
                      <a href="#">
                        <Image width={0} height={0} src={instagram} alt="Instagram Images" />
                        <span className="instagram-button">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li className="single-post">
                      <a href="#">
                        <Image width={0} height={0} src={instagram} alt="Instagram Images" />
                        <span className="instagram-button">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li className="single-post">
                      <a href="#">
                        <Image width={0} height={0} src={instagram} alt="Instagram Images" />
                        <span className="instagram-button">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                    <li className="single-post">
                      <a href="#">
                        <Image width={0} height={0} src={instagram} alt="Instagram Images" />
                        <span className="instagram-button">
                          <i className="fab fa-instagram" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="axil-footer-area axil-footer-style-1 footer-variation-2">
            <div className="footer-mainmenu">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h2 className="title">لینک های مرتبط</h2>
                      <div className="inner">
                        <ul className="ft-menu-list">
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                          <li>
                            <a href="#">فرمانداری شهرستان شبستر</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h2 className="title">آمار بازدید</h2>
                      <div className="inner">
                        <ul className="ft-menu-list">
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                          <li>
                            <span>بازدید امروز</span>
                            <b>: 38</b>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h2 className="title">اطلاعات تماس</h2>
                      <div className="inner">
                        <ul className="ft-menu-list">
                          <li>
                            <h2>04142462400</h2>
                            <li>
                              <a href="#"> ایمیل: info@daryancity.ir</a>
                            </li>
                          </li>
                          <li>داریان ، میدان اتحاد شهرداری داریان</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h2 className="title">گواهی ها</h2>
                      <div className="inner">
                        <ul className="ft-menu-list">
                          <li>
                            <Image className="dark-logo" src={logoBlack} alt="Logo Images" width={0} height={0} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="logo">
                      <a href="index.html">
                        <Image className="dark-logo" src={logoBlack} alt="Logo Images" width={0} height={0} />
                        <Image className="white-logo" src={logoWhite} alt="Logo Images" width={0} height={0} />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                      <ul className="social-icon color-tertiary md-size justify-content-start">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg">
                    <div className="copyright-right text-start text-md-end mt_sm--20">
                      <p className="b3">©کلیه حقوق مادی و معنوی این سایت متعلق به شهرداری دریان می باشد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="backto-top" />
      </div>
    </>
  );
}
