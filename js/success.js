const downloadButton = document.getElementById("downloadButton");
const message = document.getElementById("message");


const params = new URLSearchParams(
    window.location.search
);


const paymentId = params.get("payment_id");


if (!paymentId) {

    message.textContent =
        "No se encontró información de pago.";

    downloadButton.disabled = true;

} else {


    downloadButton.addEventListener(
        "click",
        () => {

            window.location.href =
            `https://taraffo-digital-backend.onrender.com/api/download?payment_id=${paymentId}`;

        }
    );

}
