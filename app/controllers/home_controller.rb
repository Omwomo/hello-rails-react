class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html { render file: 'app/views/layouts/application.html.erb' }
      format.json { head :no_content }
    end
  end
end
