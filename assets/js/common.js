//<!-- 공지사항 더미 텍스트 -->
function addBoardlist() {
    // 배열에 들어갈 텍스트들
    var texts = [
        "부고알림 서비스 조등(주) 서비스 시작 1",
        "부고알림 서비스 조등(주) 서비스 시작 2",
        "부고알림 서비스 조등(주) 서비스 시작 3",
    ];
    var day = ["2023.12.23", "2023.12.24", "2023.12.25"];

    // 리스트에 텍스트 추가하는 함수
    function addTextToList(text, dayText) {
        var list = document.getElementById("board_list");
        var listItem = document.createElement("li");
        var textNode = document.createTextNode(text); // texts 배열 데이터를 텍스트 노드로 생성
        var paragraph = document.createElement("p"); // p 태그 생성
        var dayNode = document.createTextNode(dayText); // day 배열 데이터를 텍스트 노드로 생성
        paragraph.appendChild(dayNode); // p 태그 안에 day 텍스트 추가
        listItem.appendChild(textNode); // p 태그 안에 texts 텍스트 추가
        listItem.appendChild(paragraph); // li 태그 안에 p 태그 추가
        list.appendChild(listItem); // 리스트에 li 태그 추가
    }

    // 초기 리스트 생성
    for (var i = 0; i < texts.length; i++) {
        addTextToList(texts[i], day[i]);
    }
}

//<!-- FAQ 더미 텍스트 -->
function addFaqlist() {
    // 배열에 들어갈 텍스트들
    var texts = [
        "[회원] 가입 절차를 알려주세요",
        "[부고만들기] 부고 작성 방법을 알려주세요",
        "[서비스] 화환은 어떻게 보내나요?",
        "[서비스] 다른 사람에게 공유할 수 있나요?",
        "[기타] 무료로 이용가능한가요?",
    ];
    // 리스트에 텍스트 추가하는 함수
    function addTextToList(text) {
        var list = document.getElementById("faq_list");
        var listItem = document.createElement("li");
        var textNode = document.createTextNode(text); // texts 배열 데이터를 텍스트 노드로 생성
        listItem.appendChild(textNode); // p 태그 안에 texts 텍스트 추가
        list.appendChild(listItem); // 리스트에 li 태그 추가
    }

    // 초기 리스트 생성
    for (var i = 0; i < texts.length; i++) {
        addTextToList(texts[i]);
    }
}

//init//
addBoardlist();
addFaqlist();
