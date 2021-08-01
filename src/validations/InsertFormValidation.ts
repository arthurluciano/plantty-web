import * as yup from 'yup';

const schema = yup.object().shape({
  popularName: yup.string().required("popularName"),
  scientificName: yup.string().required("scientificName"),
  ambience: yup.string().required("ambience"),
  origin: yup.string().required("origin"),
  climate: yup.string().required("climate"),
  gender: yup.string().required("gender"),
  description: yup.string().required("description"),
  plantImage: yup.mixed()
});

export default schema;