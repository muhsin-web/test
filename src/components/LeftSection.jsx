import React, { useState } from 'react'
import {BiAbacus} from 'react-icons/bi'
import {FaCreditCard, FaPencilAlt, FaEllipsisV} from 'react-icons/fa'
import { BiBadgeCheck } from 'react-icons/bi'
import {HiCheckBadge} from 'react-icons/hi2'
import masterCard from '../images/mc-logo-52.svg'
import {CgMenuGridO} from 'react-icons/cg'
import {RxHamburgerMenu} from 'react-icons/rx'
// import {HiEllipsis} from 'react-icons/hi'

const LeftSection = () => {
  const [menu, setMenu] = useState(false)
  const openMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
                <div class="payment-modal__form--header">
                    <div class="logo">
                    <div class="logo__container">
                    <i class="fa-solid fa-credit-card icon"></i>
                    <FaCreditCard color='#fff' size='20px' />
                    </div>
                    <span class="text-bold">TeamRecruit</span>
                    <span class="text-light">Pay</span>
                    </div>
                    <div class="time">
                    <div class="time__box">0</div>
                    <div class="time__box">1</div>
                    <div class="date-separator">:</div>
                    <div class="time__box">1</div>
                    <div class="time__box">9</div>
                    </div>

                    <div>
                    <RxHamburgerMenu className='menu-btn' size={30} onClick={() => openMenu()}  color='rgba(0,0,0,0.5)'/>
                    </div>
               </div>

               <div class="payment-modal__form--inputs">
                    <div class="form-input">
                         <div class="form-input__info">
                              <div class="info">
                                   <h5>Card Number</h5>
                                   <small>Enter the 16-digit card number on the card</small>
                              </div>
                              <a href="#" class="action-link">
                                   <i class="fa-solid fa-pencil"></i>
                                   <FaPencilAlt />
                                   <small class="action-link__text">Edit</small>
                              </a>
                         </div>
                         <div class="form-input__box">
                              <picture class="container">
                                   <source />
                                   <img src={masterCard} alt="" />
                              </picture>
                              <input class="input text-left" type="number"  placeholder="2412  -  7512  -  3412  -  3456"/>  
                              <div class="container">
                                   <i class='bx bxs-badge-check input-icon' style={{color: '#228be6'}}  ></i>
                                   <HiCheckBadge color='#228be6' size='1.4rem' />
                              </div>
                         </div>
                    </div>
        </div>

        <div class="payment-modal__form--inputs">
          <div class="form-input">
            <div class="form-input__info">
              <div class="info">
                <h5>CVV Number</h5>
                <small>Enter the 3 or 4 digit number on the card</small>
              </div >
              <div class="info-input">
                <div class="form-input__box bg-white">
                  <input class="input input-two" type="text" value="327" />
                  <div class="container">
                    <CgMenuGridO size='1.5rem' color='rgba(0,0,0,0.3)'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="payment-modal__form--inputs">
          <div class="form-input">
            <div class="form-input__info">
              <div class="info">
                <h5>Expiry Date</h5>
                <small>Enter the expiration date on the card</small>
              </div>
              <div class="d">
                <div class="form-input__box bg-white">
                  <input class="input input-two" type="text" value="09"/>
                </div>
                <span class="text-bold">/</span>
                <div class="form-input__box bg-white">
                  <input class="input input-two" type="text" value="22"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="payment-modal__form--inputs">
          <div class="form-input">
            <div class="form-input__info">
              <div class="info">
                <h5>Password</h5>
                <small>Enter your Dynamic password</small>
              </div>
              <div class="info-input">
                <div class="form-input__box bg-white">
                  <input class="input input-two text-left" type="password" value="00000000" />
                  <div class="container">
                  <CgMenuGridO size='1.5rem' color='rgba(0,0,0,0.3)'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div class="btn-container">
               <button class="btn">
                    Pay Now
               </button>
          </div>
          
    </>
  )
}

export default LeftSection