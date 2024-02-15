export default function Team() {
  return (
    <main
      id="team"
      className=" overflow-x-hidden text-sm font-poppins py-14 mt-16"
    >
      <div className="">
        <div className="text-center   ">
          <p className="md:text-8xl text-5xl  font-ruso   tracking-widest text-[#60e796]  font-extrabold">
            TEAM
          </p>
        </div>

        <div className=" lg:flex mx-10 lg:justify-between px-10 lg:px-0 mt-10 slg:pace-x-20 ">
          <div className="lg:w-1/4   p-6 ">
            <img
              className="lg:h-[70%] h-[50]"
              src="/ali.png"
              alt="Team mate "
            />
            <div className=" text-center ">
              <p className=" text-[#60e796] mt-4  text-ms font-bold">
                Nyiringabo
              </p>
              <p className="  mt-1 font-nunito  text-white ">
                Founder (Managing Director)
              </p>
              <p className=" text-[#60e796] mt-2 text-ms font-bold">
                nyiringabo@baho.rw
              </p>
              <div className="flex justify-center ">
                <img className="w-3 h-3 mt-2" src="/phone.png" alt="img" />
                <p className="  mt-1 font-nunito text-[#60e796] ml-2 ">
                  +250 789 101 080
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4  p-6 ">
            <img
              className=" lg:h-[70%] h-[50]"
              src="/edwin.png"
              alt="Team mate "
            />
            <div className="text-center">
              <p className=" text-[#60e796] mt-4 text-ms font-bold">
                Bayingana
              </p>
              <p className="  mt-1 font-nunito  text-white">
                Co-Founder (Chief Technical)
              </p>
              <p className=" text-[#60e796] mt-2 text-ms font-bold">
                bayingana@baho.rw
              </p>
              <div className="flex justify-center ">
                <img
                  className="w-3 h-3 mt-2"
                  src="/phone.png"
                  alt="Team mate "
                />
                <p className="  mt-1 font-nunito text-[#60e796] ml-2 ">
                  +250 738 076 778
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-6 ">
            <img
              className="lg:h-[70%] h-[50] "
              src="/di2.png"
              alt="Team mate "
            />
            <div className=" text-center ">
              <p className=" text-[#60e796] mt-4  text-ms font-bold">
                Ntakirutimana
              </p>
              <p className="  mt-1 font-nunito text-white ">
                Software Developer
              </p>
            </div>
          </div>
          <div className="lg:w-1/4  p-6 ">
            <img
              className=" lg:h-[70%] h-[50]"
              src="/orl.png"
              alt="Team mate "
            />
            <div className="text-center">
              <p className=" text-[#60e796] mt-4 text-ms font-bold">
                Bucyedusenge
              </p>
              <p className="  mt-1 font-nunito text-white ">Designer</p>
            </div>
          </div>
        </div>

        <div className=" lg:flex mx-10  lg:mt-10  px-10 lg:px-0 slg:pace-x-20 ">
          <div className="lg:w-1/4  p-6 ">
            <img
              className="lg:h-[70%] h-[50] "
              src="/mj.png"
              alt="Team mate "
            />
            <div className=" text-center ">
              <p className=" text-[#60e796] mt-4  text-ms font-bold">
                Maniraguha
              </p>
              <p className="  mt-1 font-nunito text-white  ">Content Creator</p>
            </div>
          </div>
          <div className="lg:w-1/4  p-6 ">
            <img
              className="lg:h-[70%] h-[50]"
              src="/suru.png"
              alt="Team mate "
            />
            <div className="text-center">
              <p className=" text-[#60e796] mt-4 text-ms font-bold">
                Nshimyimana
              </p>
              <p className="  mt-1 font-nunito text-white ">
                Administration Assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
