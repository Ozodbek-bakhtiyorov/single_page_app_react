import React from "react";
import styled from "styled-components";
import { Button, Button_type } from "..";
import { d_flex, d_grid } from "../../mixins";

export default function ContactForm() {
  return (
    <Content>
      <form>
        <div className="form_content">
          <div className="form-gr" data-aos="slide-right">
            <div className="input-gr">
              <input
              required
                id="fullname"
                type="text"
                placeholder="Johon Doe"
                name="fullname"
              />
            </div>
            <div className="input-gr">
              <input
              required
                id="phone"
                type="tel"
                name="phone"
                placeholder="+99891234567"
              />
            </div>
            <div className="input-gr">
              <select required name='course'>
                <option>Choose your Course</option>
                <option>Course1</option>
                <option>Course1</option>
                <option>Course1</option>
                <option>Course1</option>
              </select>
            </div>
          </div>
          <div className="form-gr" data-aos="slide-right">
            <div className="input-gr">
              <textarea
                required
                id="message"
                type="text"
                placeholder="Message..."
                name="message"
              />
            </div>
          </div>
        </div>
        <div className="form-footer" data-aos="slide-right">
          <p className="info">
            * Ваши данные не будут переданы третьим лицам, 100% вероятность.
            Конфиденциальность мы гарантируем, и защищаем персональные данные
            согласно законку ФЗ-52.
          </p>
          <div>
            <Button_type type="submit" title="Submit" />
          </div>
        </div>
      </form>
    </Content>
  );
}
const Content = styled.div`
  margin-bottom: 2rem;
  margin-top:1rem;
  form {
    .form-footer {
      width: 100%;
      ${d_grid("20px", "350px")};
      margin-top: 20px;
      p {
        font-size: 12px;
        line-height: 150%;
        color: #989898;
      }
      div {
        ${d_flex("row", "center", "flex-end")};
      }
    }
    .form_content {
      ${d_grid("20px", "400px")};
      .form-gr {
        ${d_flex("column", "space-between", "space-between")};
        .input-gr {
          display: flex;
          flex-direction: column;
          input,
          select,
          textarea {
            background: transparent;
            border: 1px solid var(--border-color);
            padding: 1rem 2rem;
            color: white;
            font-size: 18px;
            border-radius: 10px;
            &:focus{
              box-shadow:var(--shadow) inset;
            }
          }
          textarea {
            min-height: 200px;
          }
          select {
            color: inherit;
            option {
              color: white;
              background: var(--main-bg) !important;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    form {
      .form_content {
        ${d_grid("20px", "300px")};
        .form-footer {
          width: 100%;
          ${d_grid("20px", "300px")};
        }
      }
    }
    @media screen and (max-width: 768px) {
      form {
        .form-footer {
          width: 100%;
          ${d_grid("20px", "300px")};
          p {
            text-align: center;
          }
          div {
            justify-content: center;
          }
        }
        .form_content {
          ${d_grid("20px", "300px")};
          .form-gr {
            .input-gr {
              input {
                margin-bottom: 20px;
              }
              textarea {
                min-height: 150px;
              }
            }
          }
        }
      }
    }
  }
`;
