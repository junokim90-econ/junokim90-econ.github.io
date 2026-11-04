// 정책연구 페이지: 유형 버튼을 누르면 해당 유형만 보이게 걸러 준다.
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const f = chip.dataset.filter;
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === chip));
    document.querySelectorAll(".prow").forEach(row => {
      row.style.display = (f === "all" || row.dataset.type === f) ? "" : "none";
    });
  });
});
