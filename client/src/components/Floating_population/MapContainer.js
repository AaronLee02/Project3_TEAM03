// 도로명주소&지번주소를 이용하여 지도에 위치를 핀으로 나타내주는 Map Container

import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch('서울 금천구 가산디지털1로 151', function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
  
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var imageSrc = require("../../img/MOA.PNG");
        // 결과값으로 받은 위치를 마커로 표시합니다

        var imageSize = new kakao.maps.Size(160, 70)
        var imageOption = {offset: new kakao.maps.Point(80, 69)}
  
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
        var marker = new kakao.maps.Marker({
            map: map,
            position : coords,
            image: markerImage
        });
  
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:400px;color:black;text-align:center;padding:6px 0;">KOSMO PROJECT TEAM03</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    })
  }, []);

  return (
    <div className="contact">
    <div className="container">
        <ol className="breadcrumb">
            <li><a href="index.html">MOA</a></li>
            <li className="active">카카오맵</li>
        </ol>
    </div>
    <section className="sub_wrap" >
    
        <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">    
    
    
    <div id='myMap' style={{
      width: "100%", 
      height: '700px'
    }}>      
    </div>

        </article>
    </section>
  </div>
  );
}

export default MapContainer;