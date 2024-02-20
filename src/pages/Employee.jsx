import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedEmployee } from '../redux/slices/employeesSlice';

const Employee = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const selectedEmployee = useSelector(state => state.selectedEmployee.employee);
  console.log(selectedEmployee)
  useEffect(() => {
    const fetchEmployeeData = async() => {
      try {
        // Wait for the employees data to be available
        if (!employees || employees.length === 0) {
          return;
        }

        // Find the employee by id
        const employee = employees.find(emp => emp.id === id);

        // Dispatch action to set selected employee data in Redux store
        if (employee) {
          dispatch(setSelectedEmployee(employee));
        }

      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData(); // Call the function when the component mounts or when employees change
  }, [dispatch, employees, id]); // Add dependencies to useEffect

  return (
    <>
      <Navbar />
      <Wrapper>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum autem, totam error quam assumenda ad illum incidunt eligendi, quidem quis quaerat harum, fuga nam nobis ipsa reiciendis saepe libero cumque nemo consequuntur distinctio! Porro aliquam recusandae veniam earum officia nemo cupiditate adipisci consequuntur enim dolores molestias accusantium alias rem vero velit, vel atque, soluta ipsam itaque excepturi tempore deserunt! Accusantium quas itaque, repellendus natus perspiciatis placeat exercitationem ab facere deserunt quaerat nostrum ex sed doloremque fugiat eius cumque ipsam ut earum, velit explicabo saepe laboriosam reiciendis possimus! Optio modi illum nemo corrupti atque ut. Eum eligendi non doloremque nulla voluptatibus temporibus molestias ut distinctio sequi! Ut adipisci id laborum quasi ad! At reprehenderit dignissimos qui eos minima expedita. Error sint nostrum similique laudantium provident porro quam sed. Aspernatur non commodi laboriosam, minima vel, eum tempora aliquam architecto ea aperiam, quis debitis suscipit eligendi! Quo voluptatem iure minima a quas placeat in aperiam adipisci architecto! Sint corporis tenetur possimus ut exercitationem natus. Qui aperiam nisi deleniti similique repellendus, eaque provident expedita molestias veritatis iste aliquid, praesentium fuga molestiae ipsa quaerat quam sint cum incidunt voluptates. Maxime ea doloribus fugit quae fugiat magnam nulla explicabo impedit deserunt commodi delectus provident quisquam porro natus, rerum unde dicta dolore molestiae aspernatur pariatur sit officia blanditiis. Quae ratione aliquam perferendis obcaecati, corporis tenetur error commodi ullam perspiciatis earum pariatur. Itaque error corporis quidem nihil perferendis assumenda nisi dolores mollitia architecto, repellat, ratione magni, excepturi sit natus inventore praesentium adipisci. Temporibus, ullam porro quaerat tempora eos magni eius consectetur exercitationem unde ex commodi nihil sit officiis, incidunt voluptate id quis? Dolores nihil sint totam est, delectus deserunt molestias architecto in consequatur quos voluptatum quas, nobis fuga nisi tempore sunt obcaecati ad qui? Sed illo et, quos omnis aliquam blanditiis provident dolorum perspiciatis ad facere in harum ex quisquam, error sequi itaque vero saepe adipisci non beatae. Aliquid quo, repellendus vero quaerat amet, doloremque facere libero porro veniam corrupti, pariatur quia enim earum ratione ipsam iure voluptatibus perferendis ipsa quis. Perspiciatis, quibusdam laudantium commodi dolorum illum suscipit totam expedita fuga. Maxime voluptate ratione sunt illum aliquid! Doloremque quisquam numquam sunt perferendis accusantium totam debitis eos deleniti consequatur incidunt? Aperiam et ipsum quod dolore voluptates voluptatibus praesentium voluptatum odit mollitia quasi vitae dolorem, cum incidunt, sunt maiores vel. Magni animi beatae sint illum voluptate blanditiis iure, aspernatur provident necessitatibus possimus, pariatur dolores eos quisquam corrupti assumenda atque suscipit voluptates ad mollitia quasi? Sunt voluptate ullam, distinctio voluptatibus iste mollitia veniam repellat corrupti iusto, maxime reprehenderit suscipit placeat inventore quaerat magnam quod autem ab quam! Et dolorem odit distinctio ipsa tenetur laboriosam quasi cum est repellendus. Sapiente quasi rem inventore doloremque ex, iste deserunt recusandae obcaecati repudiandae quibusdam voluptatem sit reprehenderit at distinctio, modi aut qui illo. Molestias numquam harum non illum animi. Ea incidunt id neque explicabo est pariatur sunt blanditiis officia provident, nobis accusamus non qui eaque odit ut asperiores earum officiis ducimus fuga natus, repudiandae iure cum alias. Modi corrupti consequatur, laborum molestiae voluptatem distinctio quam voluptate quibusdam mollitia recusandae repellat ex dolore nisi optio officiis esse quaerat praesentium atque nobis itaque accusamus eum iure. Eos doloremque perferendis adipisci ipsa quod, rem quisquam fugiat necessitatibus aliquam alias animi dolor nemo, hic quo! Molestiae eveniet modi commodi hic quae, quisquam fuga sit, sequi facere enim nesciunt sed! Laudantium quia, commodi dolore eos mollitia nulla hic facilis! Veritatis id necessitatibus labore accusantium rerum esse, asperiores ratione facilis. Placeat quia cumque inventore provident voluptate. Iusto voluptate molestias necessitatibus esse sapiente, inventore quae quasi aliquid cum! Vero quas asperiores perspiciatis eius iure neque animi aspernatur laboriosam accusamus! Corrupti eligendi hic sint voluptatem repellendus. Laudantium, eum veniam. Expedita, pariatur culpa perferendis facilis voluptates dolorum commodi totam ratione accusantium quibusdam magnam similique laudantium perspiciatis, voluptatum in at recusandae incidunt mollitia, modi sapiente repudiandae placeat. Cumque sequi ipsa numquam nisi placeat! Saepe quo ipsum impedit dolor enim quos sunt quis, blanditiis ex soluta nam rerum fugiat eaque alias officiis nulla repudiandae labore assumenda, aperiam quasi aliquam possimus omnis voluptas? In, numquam tempore corporis eveniet maiores explicabo non iure nihil beatae vero impedit deserunt unde inventore mollitia, suscipit neque, quibusdam blanditiis illum! Tempore cupiditate veniam explicabo pariatur vero, eveniet quae quisquam dolor ullam ipsam quam obcaecati tempora blanditiis assumenda harum et suscipit repudiandae facilis dolore. Incidunt quaerat voluptates optio facere debitis porro repudiandae natus ut sit soluta nihil aliquid at, officiis neque maiores explicabo repellendus. Beatae natus minus impedit dolore eveniet? Illum animi quidem repudiandae cupiditate rerum aspernatur voluptate earum quae! Suscipit enim sunt aut placeat vitae explicabo perspiciatis voluptatibus laboriosam, atque consequatur eligendi cumque id dolorum! Explicabo iusto enim a vel itaque cumque optio veniam cum alias perferendis maiores hic, placeat commodi accusamus velit laudantium dolorum. Labore porro vitae saepe magni inventore voluptatibus facilis maiores quam necessitatibus excepturi voluptas quia architecto voluptatem aspernatur harum laboriosam fugiat vel nihil, reiciendis, cum provident, tenetur ipsam. Reiciendis, est! Alias ea odit, inventore laborum placeat praesentium veniam magni molestiae atque quis perspiciatis necessitatibus fugiat. Excepturi aspernatur, molestiae voluptatem ut harum consequuntur a sequi veritatis repudiandae, nesciunt eaque tempore provident facilis reprehenderit in fugit consequatur est vitae ullam corrupti. Ab, incidunt iste rem dignissimos unde voluptates rerum accusamus consectetur dolorum quae earum aut saepe voluptas, eveniet ut commodi odio nemo nesciunt reprehenderit. Impedit ex natus facilis cumque, et itaque, quidem quo ratione at repellendus pariatur nam nihil exercitationem dignissimos unde, voluptatum vitae vero! Quod, fugit tempora! Non, atque modi. Ut aliquam ex obcaecati! Alias optio iste, ipsa cum dolorem molestiae voluptatem fugit non tempora doloribus recusandae magni? Earum, suscipit! Odio rerum ipsum beatae voluptatibus modi exercitationem culpa voluptates a architecto. Molestiae quis blanditiis, non laudantium, nemo soluta temporibus aspernatur ab quos similique odit expedita commodi quae minima ex consectetur aperiam, enim quod totam officia sapiente veritatis magni. Harum doloremque quod pariatur, vero nesciunt officiis ratione asperiores, consectetur ipsam sequi totam. Doloremque ab blanditiis ut, magni dolorem eligendi doloribus ratione voluptas ullam placeat, mollitia odio! Suscipit aspernatur cumque asperiores! Consequuntur, tempore. Deleniti modi voluptates officia possimus fugiat! Perferendis, veniam!
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  width: 60%;
  padding: 10px;
  margin: 50px auto;
  max-height:80vh;
  overflow:auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 5px;
`;

export default Employee;
