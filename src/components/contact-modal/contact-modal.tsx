import React, { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Goods } from '../../types/goods.ts';
import { useAppSelector } from '../../hooks/use-app-selector.tsx';
import { sendOrderStatus } from '../../store/goods/selector.ts';
import { useAppDispatch } from '../../hooks/use-app-dispatch.tsx';
import { submitOrder } from '../../store/api-actions.ts';
import { toast } from 'react-toastify';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Goods;
};

export function ContactModal({ isOpen, onClose, product }: ContactModalProps) {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const isLoading = useAppSelector(sendOrderStatus);
  const dispatch = useAppDispatch();


  const validatePhone = (value: string) => {
    const regex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    if (!regex.test(value)) {
      return 'Номер телефона должен быть в формате +7(9XX)XXX-XX-XX или 8(9XX)XXX-XX-XX';
    }
    return '';
  };


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError(validatePhone(value));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }

    try {
      await dispatch(
        submitOrder({
          camerasIds: [Number(product.id)],
          coupon: null,
          tel: '+79213122222',
        })
      ).unwrap();

      setPhone('');
      onClose();
      toast.success('Заказ успешно отправлен!');
    } catch (error) {
      toast.error('Ошибка при отправке заказа');
    }
  };


  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      firstInputRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };


  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal is-active" ref={modalRef} onClick={handleOverlayClick}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <FocusLock>
          <div className="modal__content">
            <p className="title title--h4">Свяжитесь со мной</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source type="image/webp" srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`} />
                  <img
                    src={product.previewImg}
                    srcSet={`${product.previewImg2x} 2x`}
                    width="140"
                    height="120"
                    alt={product.name}
                  />
                </picture>
              </div>
              <div className="basket-item__description">
                <p className="basket-item__title">{product.name}</p>
                <ul className="basket-item__list">
                  <li className="basket-item__list-item">
                    <span className="basket-item__article">Артикул:</span>{' '}
                    <span className="basket-item__number">{product.vendorCode}</span>
                  </li>
                  <li className="basket-item__list-item">{product.type}</li>
                  <li className="basket-item__list-item">{product.level}</li>
                </ul>
                <p className="basket-item__price">
                  <span className="visually-hidden">Цена:</span>
                  {product.price} ₽
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="custom-input form-review__item">
                <label>
                  <span className="custom-input__label">
                    Телефон
                    <svg width="9" height="9" aria-hidden="true">
                      <use href="#icon-snowflake"></use>
                    </svg>
                  </span>
                  <input
                    type="tel"
                    name="user-tel"
                    placeholder="+7(9XX)XXX-XX-XX"
                    value={phone}
                    onChange={handlePhoneChange}
                    ref={firstInputRef}
                    required
                  />
                </label>
                {phoneError && <p className="custom-input__error">{phoneError}</p>}
              </div>
              <div className="modal__buttons">
                <button
                  className="btn btn--purple modal__btn modal__btn--fit-width"
                  type="submit"
                  disabled={isLoading}
                >
                  <svg width="24" height="16" aria-hidden="true">
                    <use href="#icon-add-basket"></use>
                  </svg>
                  {isLoading ? 'Отправка...' : 'Заказать'}
                </button>
              </div>
            </form>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
              <svg width="10" height="10" aria-hidden="true">
                <use href="#icon-close"></use>
              </svg>
            </button>
          </div>
        </FocusLock>
      </div>
    </div>
  );
}
