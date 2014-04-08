class ListsController < ApplicationController
  respond_to :json

  def index
    respond_with List.all
  end

  def show
    respond_with List.find(params[:id])
  end

  def create
    respond_with List.create(list_params)
  end

  def update
    respond_with List.update(params[:id], list_params)
  end

  def destroy
    respond_with List.destroy(params[:id])
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end
end
