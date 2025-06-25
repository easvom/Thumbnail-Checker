const videoList = document.getElementById("videoList");
document.getElementById("addVideo").addEventListener("click", addVideoCard);

function addVideoCard() {
  const card = document.createElement("div");
  card.className = "video-card";

  // サムネイルコンテナ
  const thumbCont = document.createElement("div");
  thumbCont.className = "thumbnail-container";
  const thumb = document.createElement("img");
  thumb.src = "";
  thumb.alt = "サムネイルを選んでください";
  thumbCont.appendChild(thumb);

  // サムネクリックで画像選択ダイアログ
  thumbCont.addEventListener("click", () => selectThumbnail(thumb));

  // コンテンツ部分
  const content = document.createElement("div");
  content.className = "card-content";

  // タイトル入力
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.className = "title-input";
  titleInput.placeholder = "動画タイトル";

  // チャンネル情報行
  const metaRow = document.createElement("div");
  metaRow.className = "meta-row";

  const channelInfo = document.createElement("div");
  channelInfo.className = "channel-info";

  const channelIcon = document.createElement("div");
  channelIcon.className = "channel-icon";

  const channelNameInput = document.createElement("input");
  channelNameInput.type = "text";
  channelNameInput.className = "info-input";
  channelNameInput.placeholder = "チャンネル名";

  channelInfo.append(channelIcon, channelNameInput);

  // 再生数・投稿日
  const viewsDateInput = document.createElement("input");
  viewsDateInput.type = "text";
  viewsDateInput.className = "info-input views-date";
  viewsDateInput.placeholder = "再生回数・投稿日";

  metaRow.append(channelInfo, viewsDateInput);

  // アクションボタン行
  const actionRow = document.createElement("div");
  actionRow.className = "action-row";
  ["👍 高評価", "共有", "⋯"].forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    actionRow.appendChild(btn);
  });

  content.append(titleInput, metaRow, actionRow);
  card.append(thumbCont, content);
  videoList.appendChild(card);
}

function selectThumbnail(imgElement) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      imgElement.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  fileInput.click();
}
