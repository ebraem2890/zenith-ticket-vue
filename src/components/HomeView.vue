<template>
    <HeaderTag />
    <div className="hero">
            <div className="container">
                        <h1>Sell and manage event tickets with ease</h1>
                        <p>Create events, track sales, and manage tickets — fast.</p>
                            <button>Get Started</button>
                    </div>
                    <div className="circle"></div>
                    <svg className='svg-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff6600" fillOpacity="1" d="M0,224L48,186.7C96,149,192,75,288,85.3C384,96,480,192,576,213.3C672,235,768,181,864,149.3C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="box">
                    <h3><img src='/payment.png' alt="zenith-pay" />Easy Payment</h3>
                    <p>Multiple payment options with strong encryption for a safe checkout experience.</p>
                </div>
                <div className="box">
                    <h3><img src='/discounts.png' alt="zen-discount" />Early Bird Discounts</h3>
                    <p>Save more when you book early — special offers for frequent users.</p>
                </div>
                <div className="box">
                    <h3><img src='/event.png' alt="zen-events" />Host Events with Ease</h3>
                    <p>Create, manage, and track your event ticket sales in real time.</p>
                </div>
    </template>
    <script>
import HeaderTag from './HeaderTag.vue'
import axios from 'axios'
    export default {
        name: 'HomeView',
        components: {
            HeaderTag
        },
        async mounted()
        {
            let user = localStorage.getItem("ticketapp_session");
            if(!user)
              {
                this.$router.push({name: 'SignUp'})
              }
              let result = await axios.get('http://localhost:3000/tickets');
              this.ticket = result.data;
        }
    }
</script>
<style>
.hero{
    padding: 40px 0;
}
.container{
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
}
.container h1, p {
    display: flex;
    gap: 24px;
    flex: 1;
    margin-bottom: 75px;
}
.container button {
    display: flex;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #ff6600;
  color: #fff
}
.circle {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #007bff33;
    top: 5px;
    left: 10px;
}
.svg-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.box {
  display: inline-block;
  flex-direction: column;
  background: #f9fafb;
  padding: 25px;
  border-radius: 15px;
  width: 150px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 5px;
}
.box h3 {
    color: #ff6600;
    margin-bottom: 5px;
}
.box img {
    width: 15px;
    margin: 2px;
}
.box p {
    color: #333;
    font-size: 15px;
}
</style>