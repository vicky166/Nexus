const CTA = () => {
  return (
    <div className="bg-[#F2FDF6] min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 py-16">
      <div className="max-w-6xl w-full bg-[#F2FDF6] p-8 sm:p-12 rounded-lg flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          Ever Wish Your Skin Could Turn Back Time?
        </h2>
        <p className="text-base sm:text-xl text-gray-700 mt-4 max-w-3xl">
          You’re not just chasing a younger reflection, you’re reclaiming the confidence that comes with looking as vibrant as you feel. 
          <span className="font-semibold text-green-700"> Sculptra®</span> isn’t a quick fix; it’s your skin’s natural ally, helping you rebuild collagen for results that 
          <em> evolve</em>, not fade.
        </p>

        <div className="bg-green-100 p-6 sm:p-10 mt-6 rounded-lg shadow-md w-full max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Limited-Time Trial Offer
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-700 mt-2">
            Start Your Collagen Journey for Only <span className="text-green-600">RM3,000 Per Vial</span>
          </p>
          <p className="text-base sm:text-lg italic text-gray-600 mt-2">
            (Save 25% for first-time clients. Only <span className="text-red-600 font-bold">15 spots</span> available this month.)
          </p>
        </div>

        <a
          href="#"
          className="mt-8 inline-block bg-green-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-2xl hover:bg-green-700 transition shadow-lg"
        >
          Claim My Discount Now →
        </a>
      </div>
    </div>
  );
};

export default CTA;
