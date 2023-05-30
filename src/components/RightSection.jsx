import React from 'react'
import signalIcon from '../images/signal.png'
import serviceIcon from '../images/chip.png'
import masterCard from '../images/mc-logo.png'
import {AiFillApple} from 'react-icons/ai'
import {BiReceipt} from 'react-icons/bi'

const RightSection = () => {
  return (
    <>
          <div class="payment-modal__summary">
        <div class="indicator"></div>
        
        <div class="credit-card">
          
          <div class="credit-card__signal">
            <img class="chip" src={serviceIcon} alt="" /> 
            <img class="signal-icon" src={signalIcon} alt="" />
          </div>

          <div class="credit-card__info">
            <small class="text-bold mb-1 text-dark">Jonathan Micheal</small>
            <p class="text-bold info-number">
              <span class="text-bold">· · · · </span>
               <span>3456</span>
            </p>
          </div>

          <div class="credit-card__exp">
            <p class="text-bold">09/22</p>
            <img class="master-card-two" src={masterCard} alt="" />
          </div>
        </div>

        <div class="enum-container">
          <div class="enum">
            <small>Company</small>
            <div class="apple">
              <div class="apple-icon__container"> <AiFillApple color="#ffffff"/></div>
             
              <small class="text-dark text-bold">Apple</small>
            </div>
            
          </div>
           <div class="enum">
            <small>Order Number</small>
            <small class="text-dark text-bold">238954</small>
          </div>
           <div class="enum">
            <small>Product</small>
            <small class="text-dark text-bold">Macbook air</small>
          </div>
           <div class="enum">
            <small>VAT(20%)</small>
            <small class="text-dark text-bold">$100.00</small>
          </div>
        </div>
        <div class="divider-container">
        <div class="divider"></div> 
         <div class="circle__one"></div>
         <div class="circle__two"></div>
        </div>
        <div class="enum-total">
          <div class="">
            <small>You have to pay</small>
            <div class=""><span class="amount">549</span><small class="text-dark text-bold">.99</small> <small>USD</small></div>
            
          </div>
          <div class="">
            <BiReceipt color='#555555' size={30}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSection