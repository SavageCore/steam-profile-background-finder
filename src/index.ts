// Find the background image/video by looking for "poster" of the video element or background-image of the div element
const video = document.querySelector(
	"#responsive_page_template_content > div.no_header.profile_page.has_profile_background > div.profile_animated_background > video"
);

const backgroundImage = document.querySelector(
	"#responsive_page_template_content > div.no_header.profile_page.has_profile_background"
);

let backgroundUrl = "";

if (video) {
	backgroundUrl = video.getAttribute("poster");
} else if (backgroundImage instanceof HTMLElement) {
	backgroundUrl = backgroundImage.style.backgroundImage;
	backgroundUrl = backgroundUrl.replace('url("', "");
	backgroundUrl = backgroundUrl.replace('")', "");
}

// Retrieve appid from url
const appidRegex = /items\/(\d+)\//;
const appid = backgroundUrl.match(appidRegex)[1];

const shopLink = `https://store.steampowered.com/points/shop/app/${appid}/cluster/5`;

const profileItemLinksContainer = document.querySelector(
	"div.profile_item_links"
);

// Append link to Points Shop
const shopMenuItem = document.createElement("div");
shopMenuItem.className = "profile_count_link";
shopMenuItem.innerHTML = `<a href="${shopLink}"><span class="count_link_label">Profile Background</span>
<span class="profile_count_link_total">&nbsp;</span></a>`;

if (profileItemLinksContainer) {
	profileItemLinksContainer.appendChild(shopMenuItem);
}
