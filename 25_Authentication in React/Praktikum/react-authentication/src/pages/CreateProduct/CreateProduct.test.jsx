import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';
import InputRadio from '../../components/InputRadio';
import InputFile from '../../components/InputFile';
import InputArea from '../../components/InputArea';
import InputGroup from '../../components/InputGroup';

describe('Input.jsx', () => {
  const setupInput = () => {
    render(
      <>
        <Input label='Product Name' type='text' id='product-name' name='productName' />
        <InputSelect
          label='Product Category'
          id='product-category-field'
          name='productCategory'
          options={[
            { value: 'Class A', label: 'Class A' },
            { value: 'Class B', label: 'Class B' },
          ]}
        />
        <InputFile label='Image of Product' id='product-image' name='productImage' />
        <InputArea
          label='Additional Description'
          id='product-description'
          name='productDescription'
          rows={3}
          placeholder='Please add product description.'
        />
        <InputGroup label='Product Price' id='product-price' name='productPrice' placeholder='Price' />
      </>
    );
    const input = screen.getByLabelText('Product Name');
    const inputSelect = screen.getByLabelText('Product Category');
    const inputFile = screen.getByLabelText('Image of Product');
    const inputArea = screen.getByLabelText('Additional Description');
    const inputGroup = screen.getByLabelText('Product Price');
    return { input, inputSelect, inputFile, inputArea, inputGroup };
  };

  it('should be render correctly', () => {
    const { input, inputSelect, inputFile, inputArea, inputGroup } = setupInput();
    expect(input).toBeInTheDocument();
    expect(inputSelect).toBeInTheDocument();
    expect(inputFile).toBeInTheDocument();
    expect(inputArea).toBeInTheDocument();
    expect(inputGroup).toBeInTheDocument();
  });

  it('Input should be able to be inputted', () => {
    const { input, inputSelect, inputFile, inputArea, inputGroup } = setupInput();

    fireEvent.change(input, { target: { value: 'My Product' } });
    fireEvent.change(inputSelect, { target: { value: 'Class A' } });
    fireEvent.change(inputArea, { target: { value: 'Good item' } });
    fireEvent.change(inputGroup, { target: { value: '500' } });
    const file = new File(['image'], 'product.png', { type: 'image/png' });
    fireEvent.change(inputFile, {
      target: {
        files: [file],
      },
    });

    expect(input.value).toBe('My Product');
    expect(inputSelect.value).toBe('Class A');
    expect(inputArea.value).toBe('Good item');
    expect(inputGroup.value).toBe('500');
    expect(inputFile.files).toHaveLength(1);
    expect(inputFile.files[0]).toStrictEqual(file);
  });

  it('should be validated', async () => {
    render(
      <>
        <Input
          label='Product Name'
          type='text'
          id='product-name'
          name='productName'
          isTouched={true}
          errorMsg={'Required'}
        />
        <InputSelect
          label='Product Category'
          id='product-category-field'
          name='productCategory'
          isTouched={true}
          errorMsg={'Required'}
          options={[
            { value: 'Class A', label: 'Class A' },
            { value: 'Class B', label: 'Class B' },
            { value: 'Class C', label: 'Class C' },
          ]}
        />
        <InputFile
          label='Image of Product'
          id='product-image'
          name='productImage'
          isTouched={true}
          errorMsg={'Required'}
        />
        <InputRadio
          label='Product Freshness'
          id='product-freshness'
          name='productFreshness'
          isTouched={true}
          errorMsg={'Required'}
          options={[
            { value: 'Brand New', label: 'Brand New' },
            { value: 'Secondhand', label: 'Secondhand' },
            { value: 'Refurbished', label: 'Refurbished' },
          ]}
        />
        <InputArea
          label='Additional Description'
          id='product-description'
          name='productDescription'
          rows={3}
          placeholder='Please add product description.'
          isTouched={true}
          errorMsg={'Required'}
        />
        <InputGroup
          label='Product Price'
          id='product-price'
          name='productPrice'
          placeholder='Price'
          isTouched={true}
          errorMsg={'Required'}
        />
      </>
    );

    expect(screen.getAllByText('Required')).toHaveLength(6);
  });
});
