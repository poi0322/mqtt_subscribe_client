# mqtt_subscribe_client

## rabbit_mq

Dockerfile에

FROM rabbitmq:3-management
RUN rabbitmq-plugins enable --offline rabbitmq_mqtt

해서 mqtt 모드 활성화 해야지 rabbit_mq로 mqtt 이용가능

계정 설정안하면 id/pw = guest/guest 가 되는거고
단순하게 subscribe에 퍼블리셔 넣으면 message에 답장옴
