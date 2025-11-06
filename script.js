// تاريخ الهدف (14 فبراير من العام القادم)
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

// دالة لتحديث العد التنازلي كل ثانية
const countdownFunction = setInterval(function() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    // حساب الأيام، الساعات، الدقائق، والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة
    document.getElementById("countdown").innerHTML = days + " يوم | " + hours + " ساعة | "
    + minutes + " دقيقة | " + seconds + " ثانية ";

    // عند انتهاء العد
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "عيد حب سعيد يا حبيبي!";
        // إظهار الرسالة مباشرة إذا انتهى العد
        document.getElementById('message-section').classList.remove('hidden');
        document.getElementById('open-message-btn').style.display = 'none';
    }
}, 1000);

// دالة لإظهار الرسالة عند الضغط على الزر
document.getElementById('open-message-btn').onclick = function() {
    // إزالة خاصية الإخفاء
    document.getElementById('message-section').classList.remove('hidden');
    // إخفاء الزر بعد الضغط عليه
    this.style.display = 'none';
    
    // تشغيل الموسيقى
    document.getElementById('background-music').play();
};